const {
  registerUserService,
  loginUserService,
} = require("../services/authService");

const registerUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required",
    });
  }

  if (username.length < 3) {
    return res.status(400).json({
      message: "Username must be at least 3 characters long",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters long",
    });
  }

  await registerUserService(username, password);

  res.json({
    message: "User registered Successfully",
  });
};

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new Error("Username and password are required"));
  }

  const token = await loginUserService(username, password);

  res.json({
    message: "Login successful",
    token,
  });
};

module.exports = {
  registerUser,
  loginUser,
};
