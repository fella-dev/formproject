const express = require("express");
const WebSocket = require("ws");
const mongoose = require("mongoose");
const db = require("./db");
const cors = require("cors");

require("dotenv").config();

const App = express();

const http = require("http");

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Set up CORS headers
App.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// WebSocket server logic
wss.on("connection", (ws) => {
  // WebSocket connection handling
});

App.use(express.json());
App.use(cors());

db.connect();

const FormsRouter = require("./form.route");

App.use("/forms", FormsRouter);

const PORT = process.env.PORT || 4000;

App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
