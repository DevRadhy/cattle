import * as jwt from "jsonwebtoken";
import AppError from "../../error/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

export class RefreshToken {
  constructor (
    private usersRepository: UsersRepository,
  ) {}

  async execute (userId: string) {
    const userExists = await this.usersRepository.findById(userId);

    if(!userExists) {
      throw new AppError("Email or password incorrect!");
    }

    const refreshToken = jwt.sign({ user_id: userExists.id }, String(process.env.JWT_SECRET), {
      expiresIn: "7d",
    });

    const token = jwt.sign({ user_id: userExists.id }, String(process.env.JWT_SECRET), {
      expiresIn: "20s",
    });

    return {
      refreshToken,
      token,
    };
  }
}