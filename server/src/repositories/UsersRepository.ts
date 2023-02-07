import User from "../entities/User";

export abstract class UsersRepository {
  abstract create(user: User, password: string): Promise<void>;
}