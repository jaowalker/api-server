"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const rssRouter = require("./routers/rss");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/rss", rssRouter);

app.use("/", (req, res) => {
  res.status(200).send("API Works");
});

app.listen(3001);
