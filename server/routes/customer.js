const express = require("express");
const Customer = require("../models/Customer");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.json({ success: true, customer });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json({ success: true, customers });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
