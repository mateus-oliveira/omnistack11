const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { errors } = require('celebrate');

const routes = require('./routes');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(routes);
app.use(errors());

module.exports = app;