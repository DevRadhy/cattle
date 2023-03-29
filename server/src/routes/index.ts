import { Router } from "express";
import { animalsRoutes } from "./animalsRoutes";
import { usersRoutes } from "./usersRoutes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/animals", animalsRoutes);

export { routes };