import User from "../../entities/User";
import AppError from "../../error/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

interface CreateUserRequest {
  name: string;
  email: string;
}

interface CreateUserResponse {
  user: User;
}

export class CreateUser {
  constructor(
    private usersRepository: UsersRepository,
  ) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const userAlreadyExists = await this.usersRepository.findByEmail(request.email);

    if(userAlreadyExists) {
      throw new AppError("User already exists.");
    }

    const user = new User({ name: request.name, email: request.email });

    await this.usersRepository.create(user);

    return {
      user,
    };
  }
}