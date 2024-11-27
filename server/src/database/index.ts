import { PrismaClient } from "@prisma/client";
import { PrismaAnimalsRepository } from "./prisma/PrismaAnimalsRepository";
import { PrismaUsersRepository } from "./prisma/PrismaUsersRepository";
import { PrismaProductionRepository } from "./prisma/PrismaProductionRepository";

const prisma = new PrismaClient();
const prismaAnimalsRepository = new PrismaAnimalsRepository(prisma);
const prismaUsersRepository = new PrismaUsersRepository(prisma);
const prismaProduction = new PrismaProductionRepository(prisma);

export { 
  prismaAnimalsRepository, 
  prismaUsersRepository, 
  prismaProduction
};