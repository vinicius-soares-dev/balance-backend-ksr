import express from "express";
import { readLogin } from "../controllers/LoginController";
import { LoginValidation } from "../middlewares/LoginValidation";

const routes = express.Router();




routes.get("/", readLogin);

routes.post("/", LoginValidation, readLogin);

export default routes;