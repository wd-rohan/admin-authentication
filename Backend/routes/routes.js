import express from "express";
import LoggIn from "../controller/login.controller.js";
import AdminAuth from "../middleware/login.auth.js";

const router = express.Router();

router.post("/login",LoggIn);

router.get("/dashboard", AdminAuth, (req, res) => {
  res.json({ message: "Welcome Loggin user" });
});

export default router;