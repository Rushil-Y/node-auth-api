const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const registerUserService = async (username, password) => {
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    throw new Error("Username already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hashedPassword,
  });

  return user;
};

module.exports = {
  registerUserService,
};
