import { describe, it, expect } from "vitest";
import { InMemoryAnimalsRepository } from "../../tests/repositories/InMemoryAnimalsRepository";
import { CreateAnimalService } from "./CreateAnimalService";
import { FindAnimalById } from "./FindAnimalById";

describe("Find Animal by ID", () => {
  it("Should be able to return a Animal by ID", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const findAnimalById = new FindAnimalById(animalsRepository);
    const createAnimal = new CreateAnimalService(animalsRepository);

    const raw = await createAnimal.execute({
      identification: "003",
      fatherId: "001",
      motherId: "002",
      birthDate: new Date(),
      weight: 40,
    });

    const animal = await findAnimalById.execute(raw.id);

    expect(animal?.props.identification).toBe("003");
  });

  it("Should not be able to return a Animal with a invalid ID", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const findAnimalById = new FindAnimalById(animalsRepository);
    const createAnimal = new CreateAnimalService(animalsRepository);

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