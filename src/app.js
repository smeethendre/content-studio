import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { urlencoded } from "express";
import { json } from "express";
const app = express();

app.use(
  cors({
    origin: "https://localhost:500",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(
  urlencoded({
    limit: "256kb",
  })
);

app.use(
  json({
    limit: "256kb",
  })
);

export { app };
