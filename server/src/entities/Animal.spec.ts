import { describe, expect, it } from 'vitest';
import Animal from './Animal';

describe("Animal", () => {
  it("Should be able to create a new animal", () => {
    const animal = new Animal({
      identification: "003",
      fatherId: "001",
      motherId: "002",
      birthDate: new Date(),
      weight: 40,
    });

    expect(animal).toBeTruthy();
    expect(animal).toHaveProperty("id");
  });
});