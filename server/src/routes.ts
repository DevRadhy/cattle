import { Router } from "express";
import {
  createAnimalController,
  deleteAnimalController,
  findAnimalByIdController,
  findManyAnimalsController,
  updateAnimalController
} from "./controllers/Animals";
import {
  authenticateUserController,
  createUserController,
  deleteUserController,
  findUserByEmailController,
  findUserByIdController,
  updateUserController
} from "./controllers/Users";
import { authorizate } from "./middlewares";

const routes = Router();

routes.post("/animals", authorizate.verify, (request, response) => {
  return createAnimalController.handle(request, response);
});

routes.get("/animals/:ownerId", authorizate.verify, (request, response) => {
  return findManyAnimalsController.handle(request, response);
});

routes.get("/animals/:id", authorizate.verify, (request, response) => {
  return findAnimalByIdController.handle(request, response);
});

routes.put("/animals/:id", authorizate.verify, (request, response) => {
  return updateAnimalController.handle(request, response);
});

routes.delete("/animals/:id", authorizate.verify, (request, response) => {
  return deleteAnimalController.handle(request, response);
});

routes.post("/login", async (request, response) => {
  return authenticateUserController.handle(request, response);
});

routes.post("/users/register", (request, response) => {
  return createUserController.handle(request, response);
});

routes.get("/users/:id", (request, response) => {
  return findUserByIdController.handle(request, response);
});

routes.get("/users/", (request, response) => {
  return findUserByEmailController.handle(request, response);
});


routes.patch("/users/:id", authorizate.verify, (request, response) => {
  return updateUserController.handle(request, response);
});

routes.delete("/users/:id", authorizate.verify, (request, response) => {
  return deleteUserController.handle(request, response);
});

export { routes };