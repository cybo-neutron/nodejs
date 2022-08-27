const express = require("express");
const https = require("https");
const app = express();

app.get("/", (req, res) => {
  //   res.send("Hello there");
  const url =
    "https://v2.jokeapi.dev/joke/Programming,Dark?format=txt&type=single";

  https.get(url, (response) => {
    // console.log(response);
    response.on("data", (chunk) => {
      //   console.log(chunk);
      //   res.send(chunk);
      console.log(typeof chunk);
      //   const data = JSON.parse(chunk);
      console.log(chunk);
      //   res.send(data.joke);
      const s = chunk;
      res.send(`<h1>${s.toString()} </h1>`);
    });
  });
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
