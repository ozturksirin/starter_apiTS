import express from "express";
import { getUsers } from "../controller/index.js";

const userRouter = express.Router();

// userRouter.get("/", (req, res) => {
//   res.send("<h1>test</h1>");
// });

userRouter.get("/getUser", getUsers);

export default userRouter;
