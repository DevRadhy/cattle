import AppError from "../../error/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

export class FindUserById {
  constructor (
    private usersRepository: UsersRepository,
  ) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id);

    if(!user) {
      throw new AppError("User does not exists.");
    }

    return user;
  }
}