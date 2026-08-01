const express = require("express");
const authRoutes = require("./src/routes/authRoutes");

const authMiddleware = require("./src/middleware/authMiddleware");

const app = express();

// Middleware
app.use(express.json());

app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to your profile!",
    user: req.user,
  });
});

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Auth Routes
app.use("/auth", authRoutes);

module.exports = app;
