import "express-async-errors";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import routes from "./routes/routes";
import mongoose from "mongoose";


const app = express();
const urlDatabase = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xm1ki6t.mongodb.net/?retryWrites=true`;
app.use(morgan('tiny'));
app.use(cors());
mongoose.set("strictQuery", true);
mongoose.connect(urlDatabase)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(`Error connecting to database: ${error}`);
  });
app.use(helmet());
app.use(express.json());

app.use(routes);


export default app;