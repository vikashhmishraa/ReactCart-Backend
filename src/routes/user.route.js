import express from "express";
import Auth from "../middlewares/Auth.Middleware.js"

import {signup , login ,getAllUsers, getUser , updateUser , replaceUser , deleteUser , logoutUser }  from "../controllers/user.controller.js"

let Router = express.Router();

Router.post("/signup", signup)
  .post("/login", login)
  .post("/logout",Auth, logoutUser)
  .get("/",Auth,  getUser)
  .get("/all-users",Auth,  getAllUsers)
  .patch("/update",Auth, updateUser)
  .put("/replace",Auth, replaceUser)
  .delete("/",Auth, deleteUser)



  export default Router;    