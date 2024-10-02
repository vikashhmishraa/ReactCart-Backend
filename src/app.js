import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin:'*', // or specify the origin of your React app
    credentials: true, // Enable this if you need to send cookies or authentication headers
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

import  userRouter  from "./routes/user.route.js";


app.use("/api/v1/users", userRouter);



export { app };
