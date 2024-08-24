import { randomUUID } from 'crypto';
import { describe, expect, it } from 'vitest';
import ProductionControl from './ProductionControl';

describe("Production", () => {
  it("Should be able to create a new production", () => {
    const animal = new ProductionControl({
      animalId: randomUUID(),
      date: new Date(),
      goal: "Engorda",
      price: 1250.00,
    });

    expect(animal).toBeTruthy();
    expect(animal).toHaveProperty("id");
  });

  it("Should be able to create a instance to an existing production", () => {
    const id = randomUUID();
    
    const animal = new ProductionControl({
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