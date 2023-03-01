import User from "../../entities/User";
import AppError from "../../error/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

export class UpdateUser {
  constructor (
    private usersRepository: UsersRepository,
  ) {}

  async execute(user: User) {
    const userExists =  await this.usersRepository.findById(user.id);
    
    if(!userExists) {
      throw new AppError("User does not exists.");
    }

    await this.usersRepository.save(user);
  }
}