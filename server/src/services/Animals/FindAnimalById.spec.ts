import { randomUUID } from "crypto";
import { describe, it, expect } from "vitest";
import AppError from "../../error/AppError";
import { InMemoryAnimalsRepository } from "../../tests/repositories/InMemoryAnimalsRepository";
import { CreateAnimal } from "./CreateAnimal";
import { FindAnimalById } from "./FindAnimalById";
import AnimalFactory from "../../tests/factories/AnimalFactory";

describe("Find Animal by ID", () => {
  it("Should be able to return a Animal by ID", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const findAnimalById = new FindAnimalById(animalsRepository);
    const createAnimal = new CreateAnimal(animalsRepository);

    const animalProps = AnimalFactory();

    const { animal } = await createAnimal.execute(animalProps);

    await findAnimalById.execute(animal.id, animal.ownerId);

    expect(animalsRepository.animals[0].identification).toBe(animalProps.identification);
  });

  it("Should not be able to return a Animal with a invalid ID", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const findAnimalById = new FindAnimalById(animalsRepository);
    const createAnimal = new CreateAnimal(animalsRepository);

    const animalProps = AnimalFactory();

    await createAnimal.execute(animalProps);

    expect(() => {
      return findAnimalById.execute(randomUUID(), randomUUID());
    }).rejects.toThrow(AppError);
  });
});