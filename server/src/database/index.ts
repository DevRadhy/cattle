import { PrismaClient } from "@prisma/client";
import { PrismaAnimalsRepository } from "./prisma/PrismaAnimalsRepository";

const prisma = new PrismaClient();
const prismaAnimalsRepository = new PrismaAnimalsRepository(prisma);

export { prismaAnimalsRepository };