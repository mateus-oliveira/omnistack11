const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routes = require('./routes');
const server = express();


server.use(cors({
    //origin: 'URL frontend'
}));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(routes);
server.listen(3333);