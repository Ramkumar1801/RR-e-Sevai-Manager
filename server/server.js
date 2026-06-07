const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("RR e-Sevai Manager Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
