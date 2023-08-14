import { Router } from "express";
import { animalsRoutes } from "./animalsRoutes";
import { usersRoutes } from "./usersRoutes";
import { authRoutes } from "./authRoutes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/animals", animalsRoutes);
routes.use("/auth", authRoutes);

export { routes };