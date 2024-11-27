import { Router } from "express";
import { createProductionController, findManyProductionsController } from "../controllers/Production";
import { authorizate } from "../middlewares";

const routes = Router();

routes.post("/", authorizate.verify, (request, response) => {
  return createProductionController.handle(request, response);
});

routes.get("/owner/:ownerId", authorizate.verify, (request, response) => {
  return findManyProductionsController.handle(request, response);
});

export { routes as productionRoutes };