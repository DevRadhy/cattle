import { randomUUID } from "crypto";
import { describe, it, expect } from "vitest";
import User from "../../entities/User";
import AppError from "../../error/AppError";
import { InMemoryUsersRepository } from "../../tests/repositories/InMemoryUsersRepository";
import { CreateUser } from "./CreateUser";
import { UpdateUser } from "./UpdateUser";

describe("Update User", () => {
  it("Should be able to update a user", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(inMemoryUsersRepository);
    const updateUser = new UpdateUser(inMemoryUsersRepository);

    const { user } = await createUser.execute({
      email: "john@mail.com",
      name: "John Doe",
      password: "password",
    });

    const updatedUser = {
      id: user.id,
      name: "John Doe",
      email: "john.doe@mail.com",
      password: "password",
    };

    await updateUser.execute(updatedUser);

    expect(inMemoryUsersRepository.users.length).toBe(1);
    expect(inMemoryUsersRepository.users[0]).toEqual(new User({
      name: updatedUser.name,
      email: updatedUser.email,
      password: updatedUser.password,
    }, updatedUser.id));
  });

  it("Should not be able to update a invalid user", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const updateUser = new UpdateUser(inMemoryUsersRepository);

    const updatedUser = new User({
      name: "John Doe",
      email: "john.doe@mail.com",
      password: "password"
    }, randomUUID());

    expect(() => {
      return updateUser.execute(updatedUser);
    }).rejects.toThrow(AppError);
  });
});