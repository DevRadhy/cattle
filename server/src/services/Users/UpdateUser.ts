import User from "../../entities/User";
import AppError from "../../error/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

interface UpdateUserRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UpdateUser {
  constructor (
    private usersRepository: UsersRepository,
  ) {}

  async execute({ id, ...props }: UpdateUserRequest) {
    const userExists =  await this.usersRepository.findById(id);

    const user = new User(props, id);
    
    if(!userExists) {
      throw new AppError("User does not exists.");
    }

    await this.usersRepository.save(user);
  }
}