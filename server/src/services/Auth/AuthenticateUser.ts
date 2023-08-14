import { compare } from "bcryptjs";
import AppError from "../../error/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";
import { refreshToken } from "../Auth";

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

    const { refreshToken: refresh_token, token } = await refreshToken.execute(userExists.id);

    return {
      refresh_token,
      token,
      user: userExists,
    };
  }
}