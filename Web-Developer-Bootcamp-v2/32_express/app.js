const express = require("express");
const app = express();

app.use((req, res) => {
  console.dir(req);
  res.send({ color: "red" });
});

app.listen(8080, () => {});
