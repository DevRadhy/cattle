import { describe, it, expect } from "vitest";
import { InMemoryAnimalsRepository } from "../../tests/repositories/InMemoryAnimalsRepository";
import { CreateAnimal } from "./CreateAnimal";
import { FindAnimalById } from "./FindAnimalById";

describe("Find Animal by ID", () => {
  it("Should be able to return a Animal by ID", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const findAnimalById = new FindAnimalById(animalsRepository);
    const createAnimal = new CreateAnimal(animalsRepository);

    const { animal } = await createAnimal.execute({
      identification: "003",
      fatherId: "001",
      motherId: "002",
      birthDate: new Date(),
      weight: 40,
    });

    await findAnimalById.execute(animal.id);

    expect(animalsRepository.animals[0].identification).toBe("003");
  });

  it("Should not be able to return a Animal with a invalid ID", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const findAnimalById = new FindAnimalById(animalsRepository);
    const createAnimal = new CreateAnimal(animalsRepository);

    await createAnimal.execute({
      identification: "003",
      fatherId: "001",
      motherId: "002",
      birthDate: new Date(),
      weight: 40,
    });

    const animal = await findAnimalById.execute("000");

    expect(animal).not.toBeTruthy();
  });
});