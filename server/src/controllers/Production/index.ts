import { createProduction } from "../../services/Production";
import { CreateProductionController } from "./createProductionController";

const createProductionController = new CreateProductionController(createProduction);

export { createProductionController };