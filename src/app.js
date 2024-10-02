import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// Allowed origins
const allowedOrigins = [
  "https://reactcart-vikash.netlify.app",
  "http://localhost:5173", // Add your local development origin here
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or Postman)
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, origin);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route Declerations

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/ok", function (req, res) {
  res.cookie("myCookie", "Hello from Express.js", {
    maxAge: 900000,
    httpOnly: true,
  });
  res.status(201).send("Cookie set");
});

// Importing Routes

import userRouter from "./routes/user.route.js";

app.use("/api/v1/users", userRouter);

export { app };
