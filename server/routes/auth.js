const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/login", (req, res) => {
  res.json({
    success: true,
    message: "Login Working"
  });
});

router.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (
    username === "admin" &&
    password === "Admin@123"
  ) {

    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      success: true,
      token
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid Credentials"
  });

});

module.exports = router;
