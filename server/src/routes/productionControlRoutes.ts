import { Router } from "express";
import { createProductionControlController } from "../controllers/ProductionControl";
import { authorizate } from "../middlewares";

const routes = Router();

routes.post("/", authorizate.verify, (request, response) => {
  return createProductionControlController.handle(request, response);
});

export { routes as productionControlRoutes };