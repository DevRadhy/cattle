import { randomUUID } from 'crypto';
import { describe, expect, it } from 'vitest';
import Animal from './Animal';

describe("Animal", () => {
  it("Should be able to create a new animal", () => {
    const animal = new Animal({
      identification: "003",
      birthDate: new Date(),
      fatherId: "001",
      motherId: "002",
      gender: 0,
      weight: 40,
      description: "A very nice animal",
      ownerId: randomUUID(),
    });

    expect(animal).toBeTruthy();
    expect(animal).toHaveProperty("id");
  });
});