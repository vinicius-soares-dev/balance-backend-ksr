import { Request, Response } from "express";
import "express-async-errors";

export const LoginController = (req: Request, res: Response) => {
  try {
    res.status(200).send("Hello world, I'm here");
  } catch {
    res.status(500).send("error");
  }
}