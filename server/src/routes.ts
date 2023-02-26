import { Router } from "express";
import { createAnimalController } from "./controllers/Animals";

const routes = Router();

routes.post("/animals", (request, response) => {
  return createAnimalController.handle(request, response);
});

export { routes };