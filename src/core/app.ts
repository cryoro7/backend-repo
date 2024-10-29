import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {userRoutes} from "../routes/userRoutes";
import {ApiError} from "../entities/ApiError";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my Express API");
});

app.use((err: ApiError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
});

export default app;
