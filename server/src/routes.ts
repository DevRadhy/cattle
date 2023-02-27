import { Router } from "express";
import {
  createAnimalController,
  deleteAnimalController,
  findAnimalByIdController,
  updateAnimalController
} from "./controllers/Animals";

const routes = Router();

routes.post("/animals", (request, response) => {
  return createAnimalController.handle(request, response);
});

routes.get("/animals/:id", (request, response) => {
  return findAnimalByIdController.handle(request, response);
});

routes.put("/animals/:id", (request, response) => {
  return updateAnimalController.handle(request, response);
});

routes.delete("/animals/:id", (request, response) => {
  return deleteAnimalController.handle(request, response);
});

export { routes };