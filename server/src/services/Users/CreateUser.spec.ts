import { describe, it, expect } from "vitest";
import AppError from "../../error/AppError";
import { InMemoryUsersRepository } from "../../tests/repositories/InMemoryUsersRepository";
import { CreateUser } from "./CreateUser";

describe("Create User", () => {
  it("Should be able to create a new user", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(inMemoryUsersRepository);

    const { user } = await createUser.execute({
      email: "john@mail.com",
      name: "John Doe",
    });

    expect(inMemoryUsersRepository.users.length).toBe(1);
    expect(inMemoryUsersRepository.users[0]).toEqual(user);
    expect(user).toEqual({
      _id: user.id,
      props: {
        name: "John Doe",
        email: "john@mail.com",
      }
    });
  });

  it("Should not be able to create a new user with a exiting email", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(inMemoryUsersRepository);

    await createUser.execute({
      email: "john@mail.com",
      name: "John Doe",
    });

    expect(() => {
      return createUser.execute({
        email: "john@mail.com",
        name: "John Doe",
      });
    }).rejects.toThrow(AppError);
  });
});