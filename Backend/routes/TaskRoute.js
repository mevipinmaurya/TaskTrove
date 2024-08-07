import express from "express";
import { addTask, deleteTask, updateTask } from "../controllers/Task.controllers.js";
import isAuthenticated from "../config/auth.js";

const taskRouter = express.Router();

taskRouter.post("/add", isAuthenticated, addTask);
taskRouter.post("/update", isAuthenticated, updateTask);
taskRouter.post("/delete", isAuthenticated, deleteTask);


export default taskRouter;