import express from "express";
import cors from "cors";
import routes from "./config/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

export default app;