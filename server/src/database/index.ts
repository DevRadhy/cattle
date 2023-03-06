import { PrismaClient } from "@prisma/client";
import { PrismaAnimalsRepository } from "./prisma/PrismaAnimalsRepository";
import { PrismaUsersRepository } from "./prisma/PrismaUsersRepository";

const prisma = new PrismaClient();
const prismaAnimalsRepository = new PrismaAnimalsRepository(prisma);
const prismaUsersRepository = new PrismaUsersRepository(prisma);

export { prismaAnimalsRepository, prismaUsersRepository };