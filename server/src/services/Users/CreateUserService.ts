import User from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

interface CreateUserResponse {
  id: string;
  name: string;
  email: string;
}

export class CreateUsersService {
  constructor(
    private userRepository: UserRepository,
  ) {}

  async execute(props: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User({ name: props.name, email: props.email });

    await this.userRepository.create(user, props.password);

    return {
      id: user.id,
      name: user.props.name,
      email: user.props.email,
    };
  }
}