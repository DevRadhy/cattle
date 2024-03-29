import { randomUUID } from "crypto";
import { describe, it, expect } from "vitest";
import AppError from "../../error/AppError";
import { InMemoryUsersRepository } from "../../tests/repositories/InMemoryUsersRepository";
import { CreateUser } from "./CreateUser";
import { DeleteUser } from "./DeleteUser";
import UserFactory from "../../tests/factories/UserFactory";

describe("Delete user", () => {
  it("Should be able to delete a user", async () => {
    const inMemmoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(inMemmoryUsersRepository);
    const deleteUser = new DeleteUser(inMemmoryUsersRepository);

    const userProps = UserFactory();

    const { user } = await createUser.execute(userProps);

    await deleteUser.execute(user.id);

    expect(inMemmoryUsersRepository.users.length).toBe(0);
  });

  it("Should not be able to delete a invalid user", async () => {
    const inMemmoryUsersRepository = new InMemoryUsersRepository();
    const deleteUser = new DeleteUser(inMemmoryUsersRepository);

    expect(() => {
      return deleteUser.execute(randomUUID());
    }).rejects.toThrow(AppError);
  });
});