import User from "../entities/User";

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findById(id: string): Promise<User | null>;
  abstract save(user: User): Promise<void>;
  abstract delete(id: string): Promise<void>;
}