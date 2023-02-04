import User from "../entities/User";

export abstract class UserRepository {
  abstract create(user: User, password: string): Promise<void>;
}