import { Router } from "express";
import { createProductionController } from "../controllers/Production";
import { authorizate } from "../middlewares";

const routes = Router();

routes.post("/", authorizate.verify, (request, response) => {
  return createProductionController.handle(request, response);
});

export { routes as productionRoutes };