import { describe, it, expect } from "vitest";
import AppError from "../../error/AppError";
import { InMemoryUsersRepository } from "../../tests/repositories/InMemoryUsersRepository";
import { AuthenticateUser } from "./AuthenticateUser";
import { CreateUser } from "./CreateUser";

describe("Authenticate User", () => {
  it("Should be able to authenticate an user", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(inMemoryUsersRepository);
    const authenticateUser = new AuthenticateUser(inMemoryUsersRepository);

    const { user } = await createUser.execute({
      name: "John Doe",
      email: "john@mail.com",
      password: "password",
    });

    const token = await authenticateUser.execute({ email: user.email, password: user.password });

    expect(token).toBeTruthy();
  });

  it("Should not be able to authenticate an user with invalid email", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const authenticateUser = new AuthenticateUser(inMemoryUsersRepository);

    expect(() => {
      return authenticateUser.execute({ email: "john.doe@mail.com", password: "password" });
    }).rejects.toThrow(AppError);
  });

  it("Should not be able to authenticate an user with invalid password", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(inMemoryUsersRepository);
    const authenticateUser = new AuthenticateUser(inMemoryUsersRepository);

    const { user } = await createUser.execute({
      name: "John Doe",
      email: "john@mail.com",
      password: "password",
    });

    expect(() => {
      return authenticateUser.execute({ email: user.email, password: "jhondoepassword" });
    }).rejects.toThrow(AppError);
  });
});