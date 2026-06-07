const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {

    const { username, password } = req.body;

    if (
      username === "Admin" &&
      password === "Admin@123"
    ) {

      const token = jwt.sign(
        {
          username: "Admin",
          role: "admin"
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d"
        }
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

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
};
