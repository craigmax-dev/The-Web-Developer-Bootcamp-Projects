var request = require("request");

request("https://jsonplaceholder.typicode.com/users/1", function (
  error,
  response,
  body
) {
  eval(require("locus"));
});
