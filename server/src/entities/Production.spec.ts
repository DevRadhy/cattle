import { randomUUID } from 'crypto';
import { describe, expect, it } from 'vitest';
import Production from './Production';

describe("Production", () => {
  it("Should be able to create a new production", () => {
    const raw = {
      animalId: randomUUID(),
      date: new Date(),
      goal: "Engorda",
      price: 1250.00,
    };
    
    const animal = new Production(raw);

    expect(animal).toBeTruthy();
    expect(animal).toHaveProperty("id");
    expect(animal).toContain({
      id: animal.id,
      ...raw,
    });
  });

  it("Should be able to create a instance to an existing production", () => {
    const id = randomUUID();
    
    const animal = new Production({
      animalId: randomUUID(),
      date: new Date(),
      goal: "Engorda",
      price: 1250.00,
    }, id);

    expect(animal).toBeTruthy();
    expect(animal).toHaveProperty("id");
    expect(animal.id).toBe(id);
  });
});