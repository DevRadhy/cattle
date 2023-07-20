import { compare } from "bcryptjs";
import AppError from "../../error/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";
import * as jwt from "jsonwebtoken";

interface AuthenticateUserRequest {
  email: string;
  password: string;
}

export class AuthenticateUser {
  constructor (
    private usersRepository: UsersRepository,
  ) {}

  async execute ({ email, password }: AuthenticateUserRequest) {
    const userExists = await this.usersRepository.findByEmail(email);

    if(!userExists) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, userExists.password);

    if(!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = jwt.sign({ user_id: userExists.id }, String(process.env.JWT_SECRET), {
      expiresIn: "7d",
    });

    return {
      token,
      user: userExists,
    };
  }
}