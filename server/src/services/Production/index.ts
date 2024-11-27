import { prismaProduction } from "../../database";
import { CreateProduction } from "./createProduction";
import { FindManyProductions } from "./findManyProductions";

const productionRepository = prismaProduction;

const createProduction = new CreateProduction(productionRepository);
const findManyProductions = new FindManyProductions(productionRepository);

export { createProduction, findManyProductions };