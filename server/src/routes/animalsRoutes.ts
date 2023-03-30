import { Router } from "express";
import { authorizate } from "../middlewares";
import {
  createAnimalController,
  deleteAnimalController,
  findAnimalByIdController,
  findManyAnimalsController,
  updateAnimalController
} from "../controllers/Animals";

const routes = Router();

routes.post("/", authorizate.verify, (request, response) => {
  return createAnimalController.handle(request, response);
});

routes.get("/owner/:ownerId", authorizate.verify, (request, response) => {
  return findManyAnimalsController.handle(request, response);
});

routes.get("/:id", authorizate.verify, (request, response) => {
  return findAnimalByIdController.handle(request, response);
});

routes.put("/:id", authorizate.verify, (request, response) => {
  return updateAnimalController.handle(request, response);
});

routes.delete("/:id", authorizate.verify, (request, response) => {
  return deleteAnimalController.handle(request, response);
});

export { routes as animalsRoutes };