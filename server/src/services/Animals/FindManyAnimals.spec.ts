import { describe, it, expect } from "vitest";
import { InMemoryAnimalsRepository } from "../../tests/repositories/InMemoryAnimalsRepository";
import { CreateAnimal } from "./CreateAnimal";
import { FindManyAnimals } from "./FindManyAnimals";
import AnimalFactory from "../../tests/factories/AnimalFactory";

describe("Find many animals by owner id", () => {
  it("Should be able to find many animals by owner id", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const findManyAnimals = new FindManyAnimals(animalsRepository);
    const createAnimal = new CreateAnimal(animalsRepository);

    await createAnimal.execute(AnimalFactory({ ownerId: "000" }));

    await createAnimal.execute(AnimalFactory({ ownerId: "000" }));

    await createAnimal.execute(AnimalFactory({ ownerId: "000" }));

    const findAnimals = await findManyAnimals.execute("000");

    expect(findAnimals.length).toBe(3);
  });

  it("Should be able to return 0 if user does not have animals", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const findManyAnimals = new FindManyAnimals(animalsRepository);

    const findAnimals = await findManyAnimals.execute("000");

    expect(findAnimals.length).toBe(0);
  });
});