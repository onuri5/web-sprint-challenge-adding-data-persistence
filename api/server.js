const express = require("express");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router"); // eslint-disable-line
const taskRouter = require("./task/router"); // eslint-disable-line

const server = express();

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);

server.use((err, req, res, next) => {// eslint-disable-line
  
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server; // build your server here and require it from index.js
