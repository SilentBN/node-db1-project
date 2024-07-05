const express = require("express");
const accountsRouter = require("./accounts/accounts-router");

const server = express();

server.use(express.json());

server.use("/api/accounts", accountsRouter);

// Root endpoint
server.get("/", (req, res) => {
  res.json({ message: "Welcome to the Budget API" });
});

// Catch-all 404 endpoint
server.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

module.exports = server;
