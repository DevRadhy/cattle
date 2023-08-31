import { describe, expect, it } from "vitest";
import AppError from "../../error/AppError";
import { InMemoryAnimalsRepository } from "../../tests/repositories/InMemoryAnimalsRepository";
import { CreateAnimal } from "./CreateAnimal";
import AnimalFactory from "../../tests/factories/AnimalFactory";

describe("Create Animal", () => {
  it("Should be able to create a new animal", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimal(animalsRepository);

    const animalProps = AnimalFactory();

    const { animal } = await createAnimal.execute(animalProps);

    expect(animalsRepository.animals[0]).toEqual(animal);
  });

  it("Should not be able to create a new animal without identification", () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimal(animalsRepository);

    const animalProps = AnimalFactory({ identification: "" });

    expect(() => {
      return createAnimal.execute(animalProps);
    }).rejects.toThrow(AppError);
  });

  it("Should not be able to create a animal with a identification that already exists", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimal(animalsRepository);

    const animalProps = AnimalFactory({ identification: "001" });

    await createAnimal.execute(animalProps);

    expect(() => {
      return createAnimal.execute(animalProps);
    }).rejects.toThrow(AppError);
  });
});