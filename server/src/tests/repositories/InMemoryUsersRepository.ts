import User from "../../entities/User";
import AppError from "../../error/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);

    if(!user) {
      return null;
    }

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);

    if(!user) {
      return null;
    }

    return user;
  }

  async save(user: User): Promise<void> {
    const raw = this.users.findIndex((raw) => raw.id === user.id);

    if(!raw) {
      throw new AppError("User does not exists.");
    }

    this.users[raw] = user;
  }

  async delete(id: string): Promise<void> {
    const user = this.users.findIndex((user) => user.id === id);

    if(user < 0) {
      throw new AppError("User does not exists.");
    }

    this.users.splice(user, 1);
  }
}