const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const url = `https://us11.api.mailchimp.com/3.0/lists/fc81ac3feb`;
  const options = {
    method: "POST",
    auth: `neer:5a7c4c5506bd2cea3f1b2bb1284f1771-us11`,
  };
  const members = [
    {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
    },
  ];

  https.request(url, options, (response) => {
    response.on("data", (data) => {
      console.log(data);
    });
  });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
