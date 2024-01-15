import express from "express";

const routes = express.Router();

const LoginController = require("../controllers/LoginController/index");


routes.get("/", LoginController.LoginController);

routes.post("/", LoginController.LoginController);

export default routes;