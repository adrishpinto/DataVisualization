import express from "express";
import { getUsers, registerUser } from "./controller.js";

const dataRouter = express.Router();

dataRouter.get("/get", getUsers);

dataRouter.get("/r", (req, res) => {
  res.send("works");
});

dataRouter.post("/post", registerUser);

export default dataRouter;
