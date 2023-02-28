import AppError from "../../error/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

export class FindUserByEmail {
  constructor (
    private usersRepository: UsersRepository,
  ) {}

  async execute(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    if(!user) {
      throw new AppError("User does not exists.");
    }

    return user;
  }
}