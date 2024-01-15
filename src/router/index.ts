import express from "express";
import UsersRouter from "./UsersRouter.js";

const router = express.Router();

router.get("/testIndex", (req, res) => {
  res.send("<h1>Welcome to LearningApp API</h1>");
});

router.use("/", UsersRouter);

export default router;
