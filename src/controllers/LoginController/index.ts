import { Request, Response } from "express";
import "express-async-errors";
// import LoginModel from "../../models/LoginModel";

export const readLogin = (req: Request, res: Response) => {
  res.status(200).send("<h1>Success</h1>");
}
