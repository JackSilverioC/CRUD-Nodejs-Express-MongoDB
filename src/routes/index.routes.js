import { Router } from "express";

import {
  renderTasks,
  createTask,
  renderEditTask,
  editTask,
  deleteTask,
  toggleDone
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", toggleDone);

router.get("/tasks/:id/edit", renderEditTask);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

export default router;
