let message = document.querySelector(".rate-info");
const button = document.querySelector("button");
const box_one = document.querySelector(".first-box");
const box_two = document.querySelector(".second-box");
const selection_one = document.querySelector("#currency-one");
const selection_two = document.querySelector("#currency-two");
document.querySelector('.calendar').valueAsDate = new Date();

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
const chosenDate = document.querySelector(".calendar")
chosenDate.max = today;
chosenDate.min = "1999-02-01";

const API_KEY = "OqqnI2T4mgCMOVcckWcv83z84vvtCx8C";

const myHeaders = new Headers();
myHeaders.append("apikey", API_KEY);

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

const convert = () => {
  const API_LINK = `https://api.apilayer.com/exchangerates_data/convert?to=${selection_two.value}&from=${selection_one.value}&amount=${box_one.value}&date=${chosenDate.value}`;
  fetch(API_LINK, requestOptions)
    .then((res) => res.json())
    .then((res) => {
      const rate = res.info.rate;
      message.textContent = `Exchange rate for ${chosenDate.value} is ${rate}`;
      box_two.value = res.result;
      console.log(res);
    })
    .catch((error) => console.log("error", error));
};

button.addEventListener("click", convert);
