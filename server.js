const express = require("express");
const WebSocket = require("ws");
const mongoose = require("mongoose");
const db = require("./db");
const cors = require("cors");

require("dotenv").config();

const App = express();

App.use(express.json());
App.use(cors());

db.connect();

const FormsRouter = require("./form.route");

App.use("/forms", FormsRouter);

const PORT = process.env.PORT || 4000;

App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
