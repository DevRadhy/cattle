import { describe, it, expect } from "vitest";
import AppError from "../../error/AppError";
import { InMemoryUsersRepository } from "../../tests/repositories/InMemoryUsersRepository";
import { CreateUser } from "./CreateUser";
import UserFactory from "../../tests/factories/UserFactory";

describe("Create User", () => {
  it("Should be able to create a new user", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(inMemoryUsersRepository);

    const userProps = UserFactory();

    const { user } = await createUser.execute(userProps);

    expect(inMemoryUsersRepository.users.length).toBe(1);
    expect(user).toEqual({
      _id: user.id,
      props: {
        name: "John Doe",
        email: "john.doe@mail.com",
        password: "1234",
      }
    });
  });

  it("Should not be able to create a new user with a exiting email", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(inMemoryUsersRepository);

    const userProps = UserFactory();

    await createUser.execute(userProps);

    expect(() => {
      return createUser.execute(userProps);
    }).rejects.toThrow(AppError);
  });
});