import { describe, expect, it } from 'vitest';
import Animal from './Animal';

describe("Animal", () => {
  it("Should be able to create a new animal", () => {
    const animal = new Animal({
      identification: 3,
      fatherId: 1,
      motherId: 2,
      birthDate: new Date(),
      weight: 40,
    });

    expect(animal).toBeTruthy();
    expect(animal).toHaveProperty("id");
  });
});