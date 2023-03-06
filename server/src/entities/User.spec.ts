import { describe, expect, it } from 'vitest';
import User from './User';

describe("User", () => {
  it("Should be able to create a new user", () => {
    const user = new User({
      name: "John Doe",
      email: "john@mail.com",
      password: "password",
    });

    expect(user).toBeTruthy();
    expect(user).toHaveProperty("id");
  });
});