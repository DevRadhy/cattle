import User from "../entities/User";

export class UsersViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}