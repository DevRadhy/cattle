import User from "../entities/User";
import AppError from "../error/AppError";
import { UserRepository } from "../repositories/UsersRepository";
import { prismaClient } from "./connection";
import { hash } from "bcryptjs";

export default class UsersDatabase implements UserRepository {
  async create(user: User, password: string): Promise<void> {
    if(!user.props.email) {
      throw new AppError("Invalid email");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: user.props.email
      }
    });

    if(userAlreadyExists) {
      throw new AppError("User already exists");
    }

    await prismaClient.user.create({
      data: {
        name: user.props.name,
        email: user.props.email,
        password: await hash(password, 8),
      }
    });
  }
}