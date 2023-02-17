import { describe, expect, it } from "vitest";
import AppError from "../../error/AppError";
import { InMemoryAnimalsRepository } from "../../tests/repositories/InMemoryAnimalsRepository";
import { CreateAnimalService } from "./CreateAnimalService";

describe("Create Animal", () => {
  it("Should be able to create a new animal", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimalService(animalsRepository);

    const animal = await createAnimal.execute({
      identification: "003",
      fatherId: "001",
      motherId: "002",
      birthDate: new Date(),
      weight: 40,
    });

    expect(animal).toBeTruthy();
  });

  it("Should not be able to create a new animal without identification", () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimalService(animalsRepository);

    expect(() => {
      return createAnimal.execute({
        identification: "",
        fatherId: "001",
        motherId: "002",
        birthDate: new Date(),
        weight: 40,
      });
    }).rejects.toThrow(AppError);
  });

  it("Should not be able to create a animail with a identification that already exists", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimalService(animalsRepository);

    await createAnimal.execute({
      identification: "003",
      fatherId: "001",
      motherId: "002",
      birthDate: new Date(),
      weight: 40,
    });

    expect(() => {
      return createAnimal.execute({
        identification: "003",
        fatherId: "001",
        motherId: "002",
        birthDate: new Date(),
        weight: 40,
      });
    }).rejects.toThrow(AppError);
  });
});