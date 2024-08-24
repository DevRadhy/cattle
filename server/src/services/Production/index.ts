import { prismaProduction } from "../../database";
import { CreateProduction } from "./createProduction";

const productionRepository = prismaProduction;

const createProduction = new CreateProduction(productionRepository);

export { createProduction };