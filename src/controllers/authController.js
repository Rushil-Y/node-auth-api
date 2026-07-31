const bcrypt = require("bcrypt");
const { users } = require("../models/userModel");

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user
    users.push({ username, password: hashedPassword });

    res.json({ message: "User registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ message: "Login successful" });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
