const express = require("express");
const accountsRouter = require("./accounts/accounts-router");
const rateLimit = require("express-rate-limit");

const server = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

server.use(limiter);

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
