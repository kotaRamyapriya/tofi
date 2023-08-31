const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    // Create user by superadmin
    // Ensure that the authenticated user is a superadmin

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });

    await newUser.save();

    res.json(newUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // Delete user by superadmin
    // Ensure that the authenticated user is a superadmin

    await User.findByIdAndDelete(req.params.id);

    res.json({ msg: "User deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
