import AppError from "../../error/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

export class DeleteUser {
  constructor (
    private usersRepository: UsersRepository,
  ) {}

  async execute(id: string) {
    const userExists = await this.usersRepository.findById(id);

    if(!userExists) {
      throw new AppError("User does not exists.");
    }

    await this.usersRepository.delete(id);
  }
}