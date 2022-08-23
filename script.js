const message = document.querySelector(".rate-info");
const button = document.querySelector("button");
const box_one = document.querySelector(".first-box");
const box_two = document.querySelector(".second-box");
const selection_one = document.querySelector("#currency-one");
const selection_two = document.querySelector("#currency-two");

const API_KEY = "OqqnI2T4mgCMOVcckWcv83z84vvtCx8C"
const API_LINK = "https://api.apilayer.com/exchangerates_data/convert?to=" + selection_one.value + "&from=" + selection_two.value + "&amount=" + box_one.value


const myHeaders = new Headers();
myHeaders.append("apikey", API_KEY);

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// fetch(API_LINK, requestOptions)
//   .then(response => response.json())
//   .then(res => console.log(res))
//   .catch(error => console.log('error', error));

button.addEventListener("click", convert)