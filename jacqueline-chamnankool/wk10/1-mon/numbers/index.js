const express = require("express");
const ejs = require("ejs");
const axios = require("axios");

const server = express();
server.set("view-engine", ejs);

const PORT = 1337;

server.get("/", (req, res) => {
  res.render("home.ejs");
});

server.get("/trivia", (req, res) => {
    axios.get("http://numbersapi.com/random/trivia").then((response) => {
      res.send(response.data);
    });
  });
  
server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
