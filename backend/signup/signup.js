import bcrypt from "bcryptjs";
import loggedInUser from "../models/user.model.js";

const signedupUser = async () => {
  const adminExists = await loggedInUser.findOne({ email: "rohan@gmail.com" });
  if (adminExists) return console.log("User already exists");

  const hashedPassword = await bcrypt.hash("rohan123", 10);

  await loggedInUser.create({
    email: "rohan@gmail.com",
    password: hashedPassword
  });

  console.log("User created successfully");
};

export default signedupUser;
