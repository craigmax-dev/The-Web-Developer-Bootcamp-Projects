// https://api.coindesk.com/v1/bpi/currentprice/CNY.json

// json to javascript
const jsonData =
  '{"time":{"updated":"Oct 22, 2020 14:58:00 UTC","updatedISO":"2020-10-22T14:58:00+00:00","updateduk":"Oct 22, 2020 at 15:58 BST"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD & CNY respectively).","bpi":{"USD":{"code":"USD","rate":"12,934.7831","description":"United States Dollar","rate_float":12934.7831},"CNY":{"code":"CNY","rate":"40,202.5000","description":"Chinese Yuan","rate_float":40202.5}}}';

const data = JSON.parse(jsonData);

// javascript to json
const dog = { breed: "lab", color: "black", isAlive: true, owner: undefined };
const jsonDog = JSON.stringify(dog);

// making xhr's - old option
const req = new XMLHttpRequest();
req.onload = () => {
  const data = JSON.parse(this.responseText);
  console.log(data.ticker.price);
};

req.onerror = () => {
  console.log("Error!");
  console.log(this);
};

req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
req.send;

// fetch api - new option for making http requests through JS - promise based
fetch("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log("RESPONSE, WAITING TO PARSE...", res);
    return res.json();
  })
  .then((data) => {
    console.log("DATA PARSED...", data);
    console.log(data.ticker.price);
  })
  .catch((e) => {
    console.log("OH NO!", e);
  });

// same in async
const fetchBitcoinPrice = async () => {
  try {
    const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
    const data = await res.json();
    console.log(data.ticker.price);
  } catch (e) {
    console.log(e);
  }
};

// axios - library for making http requests
