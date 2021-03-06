var express = require("express");
var app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// this is where the simple returned data can be put.
app.get("/test", (req, res, next) => {
  res.json("returned lots data");
  console.log("test");
});

app.get("/statuscheck", (req, res, next) => {
  res.json(jsonCreate('{ "status": true }'));
});

function jsonCreate(data) {
  const obj = JSON.parse(data);
  console.log(obj);
  return obj;
}
