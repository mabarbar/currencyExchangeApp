let message = document.querySelector(".rate-info");
const button = document.querySelector("button");
const box_one = document.querySelector(".first-box");
const box_two = document.querySelector(".second-box");
const selection_one = document.querySelector("#currency-one");
const selection_two = document.querySelector("#currency-two");

const API_KEY = "OqqnI2T4mgCMOVcckWcv83z84vvtCx8C";

const myHeaders = new Headers();
myHeaders.append("apikey", API_KEY);

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

const convert = () => {
  const API_LINK = `https://api.apilayer.com/exchangerates_data/convert?to=${selection_two.value}&from=${selection_one.value}&amount=${box_one.value}`;
  fetch(API_LINK, requestOptions)
    .then((res) => res.json())
    .then((res) => {
      const rate = res.info.rate;
      message.textContent = `Exchange rate is ${rate}`;
      box_two.value = res.result;
    })
    .catch((error) => console.log("error", error));
};

button.addEventListener("click", convert);
