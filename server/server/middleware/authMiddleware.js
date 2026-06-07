const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

router.get("/", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome Admin Dashboard",
    user: req.user
  });
});

module.exports = router;
