import { hash } from "bcryptjs";
import { prismaClient } from "../database/connection";
import AppError from "../error/AppError";

export class CreateUsersService {
  async execute(email: string, password: string) {
    if(!email) {
      throw new AppError("Invalid email");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email
      }
    });

    if(userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const user = await prismaClient.user.create({
      data: {
        email,
        password: await hash(password, 8),
      }
    });

    return user;
  }
}