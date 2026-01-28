import jwt from "jsonwebtoken";
import loggedInUser from "../models/user.model.js";
import bcrypt from "bcryptjs"; // bcryptjs consistent with signup

const mySecretCode = "your_jwt_secret"; // apni env variable me rakh sakte ho

const LoggIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await loggedInUser.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid Email" });
    }

    const pasIsMatch = await bcrypt.compare(password, admin.password);
    if (!pasIsMatch) {
      return res.status(401).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login credentials error" });
  }
};

export default LoggIn;
