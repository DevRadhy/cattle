import { describe, it, expect } from 'vitest';
import { InMemoryAnimalsRepository } from '../../tests/repositories/InMemoryAnimalsRepository';
import { CreateAnimal } from './CreateAnimal';
import { UpdateAnimal } from './UpdateAnimal';
import AnimalFactory from '../../tests/factories/AnimalFactory';

describe("Update Animal", () => {
  it("Should be able to update a animal", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimal(animalsRepository);
    const updateAnimal = new UpdateAnimal(animalsRepository);

    const animalProps = AnimalFactory();

    const { animal } = await createAnimal.execute(animalProps);

    await updateAnimal.execute({
      id: animal.id,
      identification: animal.identification,
      fatherId: animal.fatherId,
      motherId: animal.motherId,
      gender: animal.gender,
      birthDate: animal.birthDate,
      weight: 80,
      ownerId: animal.ownerId,
    });

    expect(animalsRepository.animals).toHaveLength(1);
    expect(animalsRepository.animals[0].weight).toEqual(80);
  });
});