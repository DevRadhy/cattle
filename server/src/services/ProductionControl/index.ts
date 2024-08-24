import { prismaProductionControl } from "../../database";
import { CreateProductionControll } from "./createProductionControll";

const productionControlRepository = prismaProductionControl;

const createProductionControl = new CreateProductionControll(productionControlRepository);

export { createProductionControl };