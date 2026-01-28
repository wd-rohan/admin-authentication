import express from "express";
import ConnectDB from "./DB/db.js";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/routes.js";
import cors from "cors";
import signedupUser from "./signup/signup.js";
const server = express();

server.use(cors());
ConnectDB();
signedupUser();
server.use(express.json());
server.use("/api/LoggedIN", router);

server.listen(process.env.JWT_PORT, () => {
  console.log("server will run at http://localhost:8000");
});

