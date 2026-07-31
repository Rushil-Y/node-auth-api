const express = require("express");
const authRoutes = require("./src/routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Auth Routes
app.use("/auth", authRoutes);

module.exports = app;
