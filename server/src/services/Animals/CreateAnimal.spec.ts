import { describe, expect, it } from "vitest";
import { InMemoryAnimalsRepository } from "../../tests/repositories/InMemoryAnimalsRepository";
import { CreateAnimalService } from "./CreateAnimalService";

describe("Create Animal", () => {
  it("Should be able to create a new animal", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimalService(animalsRepository);

    const animal = await createAnimal.execute({
      identification: 3,
      fatherId: 1,
      motherId: 2,
      birthDate: new Date(),
      weight: 40,
    });

    expect(animal).toBeTruthy();
  });
});