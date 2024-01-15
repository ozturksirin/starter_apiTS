import { UserSchema } from "../model/index.js";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserSchema.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const test = async (req: Request, res: Response) => {
  res.send("<h1>Welcome to LearningApp API</h1>");
};
