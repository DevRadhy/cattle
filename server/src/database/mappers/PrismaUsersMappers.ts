import User from "../../entities/User";

export class PrismaUsersMappers {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }

  static toDomain(raw: any) {
    return new User({
      name: raw.name,
      email: raw.email,
      password: raw.password,
    },
    raw.id
    );
  }
}