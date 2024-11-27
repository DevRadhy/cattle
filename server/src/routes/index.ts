import { Router } from "express";
import { animalsRoutes } from "./animalsRoutes";
import { usersRoutes } from "./usersRoutes";
import { authRoutes } from "./authRoutes";
import { productionRoutes } from "./productionRoutes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/animals", animalsRoutes);
routes.use("/auth", authRoutes);
routes.use("/production", productionRoutes);

export { routes };