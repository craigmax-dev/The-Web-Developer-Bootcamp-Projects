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

// axios - library for making http requests - can use in both node.js and server side
axios
  .get("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log(res.data.ticker.price);
  })
  .catch((err) => {
    console.log("ERROR!", err);
  });

// same function with axios
const getBitcoinPrice_axios = async () => {
  try {
    const res = await axios.get(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    console.log(res.data.ticker.price);
  } catch (e) {
    console.log("ERROR!", e);
  }
};

const button = document.querySelector("#btn_dadJoke");

const jokes = document.querySelector("#ul_dadJoke");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);

// TV show search app
const form = document.querySelector("#searchForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchQuery = form.elements.query.value;
  const config = { params: { q: searchQuery }, headers: {} };
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  showImages(res.data);
  form.elements.query.value = "";
});

const showImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
