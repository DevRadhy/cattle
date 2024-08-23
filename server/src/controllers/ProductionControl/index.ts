import { createProductionControl } from "../../services/ProductionControl";
import { CreateProductionControlController } from "./createProductionControlController";

const createProductionControlController = new CreateProductionControlController(createProductionControl);

export { createProductionControlController };