const rss = require("express").Router();
const fetch = require("node-fetch");
const Parser = require("rss-parser");
const parser = new Parser();

rss.post("/", (req, res) => {
  console.log(req.body);
  fetch(req.body.URL)
    .then((response) => response.text())
    .then((string) => parser.parseString(string))
    .then((data) => res.status(200).send(data))
    .catch((error) => console.log(error));
});

rss.get("/", (req, res) => {
  res.status(200).send("RSS");
});

module.exports = rss;
