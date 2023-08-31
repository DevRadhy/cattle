import { describe, it, expect } from "vitest";
import AppError from "../../error/AppError";
import { InMemoryUsersRepository } from "../../tests/repositories/InMemoryUsersRepository";
import { CreateUser } from "./CreateUser";
import { FindUserByEmail } from "./FindUserByEmail";
import UserFactory from "../../tests/factories/UserFactory";

describe("Find user by email", () => {
  it("Should be able to find a user by email", async () => {
    const inMemmoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(inMemmoryUsersRepository);
    const findUserByEmail = new FindUserByEmail(inMemmoryUsersRepository);

    const userProps = UserFactory();

    const { user } = await createUser.execute(userProps);

    const userFound = await findUserByEmail.execute(user.email);

    expect(userFound).toHaveProperty("id");
    expect(userFound).toHaveProperty("email");
    expect(userFound.email).toEqual(user.email);
  });

  it("Should not be able to find a user with a invalid email", async () => {
    const inMemmoryUsersRepository = new InMemoryUsersRepository();
    const findUserByEmail = new FindUserByEmail(inMemmoryUsersRepository);

    expect(() => {
      return findUserByEmail.execute("jhon@mail.com");
    }).rejects.toThrow(AppError);
  });
});