import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Read first doc of cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Server is max legth to get a data is 8kb
app.use(express.json({ limit: "8kb" }));
// This is use for url becuse all url encoder is defently encode  over url so we need this config
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// If you store some data in user media file and more in backend so we use this confing
app.use(express.static("public"));

app.use(cookieParser());
export { app };
