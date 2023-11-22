const express = require("express");
const WebSocket = require("ws");
const mongoose = require("mongoose");
const db = require("./db");
const cors = require("cors");

require("dotenv").config();

const App = express();

App.use(express.json());
App.use(cors());

const allowedOrigins = [
  "https://gleaming-kitten-460220.netlify.app",
  "http://localhost:4000",
]; // Add your Netlify domain here

App.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is allowed, or if it's a same-origin request (e.g., from localhost)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
db.connect();

const FormsRouter = require("./form.route");

App.use("/forms", FormsRouter);

const PORT = process.env.PORT || 4000;

App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
