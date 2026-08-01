const express = require("express");
const authRoutes = require("./src/routes/authRoutes");

const authMiddleware = require("./src/middleware/authMiddleware");
const roleMiddleware = require("./src/middleware/roleMiddleware");

const app = express();

// Middleware
app.use(express.json());

app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to your profile!",
    user: req.user,
  });
});

app.get("/admin", authMiddleware, roleMiddleware("admin"), (req, res) => {
  res.json({
    message: "Welcome admin",
  });
});

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Auth Routes
app.use("/auth", authRoutes);

const errorMiddleware = require("./src/middleware/errorMiddleware");
app.use(errorMiddleware);

module.exports = app;
