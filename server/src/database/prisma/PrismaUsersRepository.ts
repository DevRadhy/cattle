import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import User from "../../entities/User";
import AppError from "../../error/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";
import { PrismaUsersMappers } from "../mappers/PrismaUsersMappers";

export class PrismaUsersRepository implements UsersRepository {
  constructor (
    private prisma: PrismaClient,
  ) {}

  async create(user: User): Promise<void> {
    const userAlreadyExists = await this.prisma.user.findFirst({
      where: {
        email: user.email
      }
    });

    if(userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const userPrisma = {
      ...PrismaUsersMappers.toPrisma(user),
      password: await hash(user.password, 8)
    };

    await this.prisma.user.create({
      data: userPrisma,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      }
    });

    if(!user) {
      return null;
    }

    return PrismaUsersMappers.toDomain(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      }
    });

    if(!user) {
      return null;
    }

    return PrismaUsersMappers.toDomain(user);
  }

  async save(user: User): Promise<void> {
    const userAlreadyExists = await this.prisma.user.findFirst({
      where: {
        id: user.id,
      }
    });

    if(!userAlreadyExists) {
      throw new AppError("User does not exists!");
    }

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        ...PrismaUsersMappers.toPrisma(user),
      }
    });

  }

  async delete(id: string): Promise<void> {
    const userAlreadyExists = await this.prisma.user.findFirst({
      where: {
        id,
      }
    });

    if(!userAlreadyExists) {
      throw new AppError("User does not exists!");
    }

    await this.prisma.user.delete({
      where: {
        id,
      }
    });
  }

}