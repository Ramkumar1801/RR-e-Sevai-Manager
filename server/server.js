const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");

dotenv.config();

const app = express();

// MongoDB URI இருந்தால் மட்டும் connect ஆகும்
if (
  process.env.MONGO_URI &&
  (process.env.MONGO_URI.startsWith("mongodb://") ||
   process.env.MONGO_URI.startsWith("mongodb+srv://"))
) {
  connectDB();
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "RR e-Sevai Manager API Running"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
