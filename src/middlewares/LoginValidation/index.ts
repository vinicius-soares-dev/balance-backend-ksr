import { Request, Response, NextFunction } from "express";
import LoginDataSchema from "../../models/LoginModel/index";


export const LoginValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Required data" });
  const emailList = await LoginDataSchema.find({ email: email});
  const passwordList = await LoginDataSchema.find({ password: password });

  if(emailList.length && passwordList.length > 0) return next();

  return res.status(400).json({ message: "User not found" });
}