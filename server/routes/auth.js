const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.json({
    success: true,
    message: "Login Working"
  });
});

router.post("/login", (req, res) => {
  res.json({
    success: true,
    message: "Login Working"
  });
});

module.exports = router;
