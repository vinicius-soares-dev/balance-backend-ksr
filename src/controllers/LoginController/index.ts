import { Request, Response } from "express";
import "express-async-errors";

export const LoginController = (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if(email == "vinicius@gmail.com" && password == 12345678) {
      return res.status(200).json({ message: 'User logged in successfully' })
    }
  } catch {
    return res.status(401).json({ error: 'Email or Password incorrect.'});
  }
}