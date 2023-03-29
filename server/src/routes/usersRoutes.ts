import { Router } from "express";
import { authorizate } from "../middlewares";
import {
  authenticateUserController,
  createUserController,
  deleteUserController,
  findUserByEmailController,
  findUserByIdController,
  updateUserController
} from "../controllers/Users";

const routes = Router();

routes.post("/login", async (request, response) => {
  return authenticateUserController.handle(request, response);
});

routes.post("/register", (request, response) => {
  return createUserController.handle(request, response);
});

routes.get("/:id", (request, response) => {
  return findUserByIdController.handle(request, response);
});

routes.get("/", (request, response) => {
  return findUserByEmailController.handle(request, response);
});


routes.patch("/:id", authorizate.verify, (request, response) => {
  return updateUserController.handle(request, response);
});

routes.delete("/:id", authorizate.verify, (request, response) => {
  return deleteUserController.handle(request, response);
});

export { routes as usersRoutes };