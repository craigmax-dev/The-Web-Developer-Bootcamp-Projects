// Two methods of doing this: using request and request-promise

// const request = require("request");

// request(
//   "https://jsonplaceholder.typicode.com/users/1",
//   (error, response, body) => {
//     if (!error && response.statusCode == 200) {
//       const parsedData = JSON.parse(body);
//       console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
//     }
//   }
// );

const rp = require("request-promise");

rp("https://jsonplaceholder.typicode.com/users/1")
  .then((body) => {
    const parsedData = JSON.parse(body);
    console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
  })
  .catch((err) => {
    console.log(err);
  });
