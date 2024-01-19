import mongoose from "mongoose";

const LoginDataSchema =  new mongoose.Schema({
  email: String,
  password: String,
});

export default mongoose.model("Login", LoginDataSchema);