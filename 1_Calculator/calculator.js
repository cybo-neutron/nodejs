const { response, urlencoded } = require("express");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  n1 = parseInt(req.body.num1);
  n2 = parseInt(req.body.num2);
  res.send("The sum of two numbers is : " + (n1 + n2));
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
