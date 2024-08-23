import { PrismaClient } from "@prisma/client";
import { PrismaAnimalsRepository } from "./prisma/PrismaAnimalsRepository";
import { PrismaUsersRepository } from "./prisma/PrismaUsersRepository";
import { PrismaProductionControlRepository } from "./prisma/PrismaProductionControlRepository";

const prisma = new PrismaClient();
const prismaAnimalsRepository = new PrismaAnimalsRepository(prisma);
const prismaUsersRepository = new PrismaUsersRepository(prisma);
const prismaProductionControl = new PrismaProductionControlRepository(prisma);

export { 
  prismaAnimalsRepository, 
  prismaUsersRepository, 
  prismaProductionControl 
};