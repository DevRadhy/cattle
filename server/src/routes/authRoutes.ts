import { Router } from 'express';
import { authenticateUserController, refreshTokenContrller } from '../controllers/Auth';
import { authorizate } from '../middlewares';

const routes = Router();

routes.post('/refresh-token', authorizate.verify, (request, response) => {
  return refreshTokenContrller.handle(request, response);
});

routes.post("/", async (request, response) => {
  return authenticateUserController.handle(request, response);
});

export { routes as authRoutes };