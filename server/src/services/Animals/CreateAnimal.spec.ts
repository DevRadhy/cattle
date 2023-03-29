import { randomUUID } from "crypto";
import { describe, expect, it } from "vitest";
import AppError from "../../error/AppError";
import { InMemoryAnimalsRepository } from "../../tests/repositories/InMemoryAnimalsRepository";
import { CreateAnimal } from "./CreateAnimal";

describe("Create Animal", () => {
  it("Should be able to create a new animal", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimal(animalsRepository);

    const { animal } = await createAnimal.execute({
      identification: "003",
      fatherId: "001",
      motherId: "002",
      birthDate: new Date(),
      weight: 40,
      ownerId: randomUUID(),
    });

    expect(animalsRepository.animals[0]).toEqual(animal);
  });

  it("Should not be able to create a new animal without identification", () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimal(animalsRepository);

    expect(() => {
      return createAnimal.execute({
        identification: "",
        fatherId: "001",
        motherId: "002",
        birthDate: new Date(),
        weight: 40,
        ownerId: randomUUID(),
      });
    }).rejects.toThrow(AppError);
  });

  it("Should not be able to create a animail with a identification that already exists", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimal(animalsRepository);

    await createAnimal.execute({
      identification: "003",
      fatherId: "001",
      motherId: "002",
      birthDate: new Date(),
      weight: 40,
      ownerId: randomUUID(),
    });

    expect(() => {
      return createAnimal.execute({
        identification: "003",
        fatherId: "001",
        motherId: "002",
        birthDate: new Date(),
        weight: 40,
        ownerId: randomUUID(),
      });
    }).rejects.toThrow(AppError);
  });
});