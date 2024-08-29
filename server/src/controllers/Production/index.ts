import { createProduction, findManyProductions } from "../../services/Production";
import { CreateProductionController } from "./createProductionController";
import { FindManyProductionsController } from "./findManyProductionsController";

const createProductionController = new CreateProductionController(createProduction);
const findManyProductionsController = new FindManyProductionsController(findManyProductions);

export { createProductionController, findManyProductionsController };