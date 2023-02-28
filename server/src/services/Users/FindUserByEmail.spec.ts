import { describe, it, expect } from "vitest";
import AppError from "../../error/AppError";
import { InMemoryUsersRepository } from "../../tests/repositories/InMemoryUsersRepository";
import { CreateUsers } from "./CreateUser";
import { FindUserByEmail } from "./FindUserByEmail";

describe("Find user by email", () => {
  it("Should be able to find a user by email", async () => {
    const inMemmoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUsers(inMemmoryUsersRepository);
    const findUserByEmail = new FindUserByEmail(inMemmoryUsersRepository);

    const { user } = await createUser.execute({
      name: "John Doe",
      email: "john@mail.com",
    });

    const userFound = await findUserByEmail.execute("john@mail.com");

    expect(userFound).toEqual(user);
  });

  it("Should not be able to find a user with a invalid email", async () => {
    const inMemmoryUsersRepository = new InMemoryUsersRepository();
    const findUserByEmail = new FindUserByEmail(inMemmoryUsersRepository);

    expect(() => {
      return findUserByEmail.execute("jhon@mail.com");
    }).rejects.toThrow(AppError);
  });
});