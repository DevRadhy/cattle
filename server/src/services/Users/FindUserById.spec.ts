import { randomUUID } from "crypto";
import { describe, it, expect } from "vitest";
import AppError from "../../error/AppError";
import { InMemoryUsersRepository } from "../../tests/repositories/InMemoryUsersRepository";
import { CreateUser } from "./CreateUser";
import { FindUserById } from "./FindUserById";

describe("Find user by id", () => {
  it("Should be able to find a user by id", async () => {
    const inMemmoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(inMemmoryUsersRepository);
    const findUserById = new FindUserById(inMemmoryUsersRepository);

    const { user } = await createUser.execute({
      name: "John Doe",
      email: "john@mail.com",
    });

    const userFound = await findUserById.execute(user.id);

    expect(userFound).toEqual(user);
  });

  it("Should not be able to find a user with a invalid id", async () => {
    const inMemmoryUsersRepository = new InMemoryUsersRepository();
    const findUserById = new FindUserById(inMemmoryUsersRepository);

    expect(() => {
      return findUserById.execute(randomUUID());
    }).rejects.toThrow(AppError);
  });
});