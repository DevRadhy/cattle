import { describe, it, expect } from 'vitest';
import { InMemoryAnimalsRepository } from '../../tests/repositories/InMemoryAnimalsRepository';
import { CreateAnimalService } from './CreateAnimalService';
import { UpdateAnimal } from './UpdateAnimal';

describe("Update Animal", () => {
  it("Should be able to update a animal", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimalService(animalsRepository);
    const updateAnimal = new UpdateAnimal(animalsRepository);

    const animal = {
      identification: "003",
      fatherId: "001",
      motherId: "002",
      birthDate: new Date(),
      weight: 40,
    };

    const raw = await createAnimal.execute(animal);

    await updateAnimal.execute({
      id: raw.id,
      props: {
        ...raw,
        weight: 80,
      }
    });

    expect(animalsRepository.animals).toHaveLength(1);
    expect(animalsRepository.animals).toEqual([
      {
        id: raw.id,
        props: {
          ...raw,
          weight: 80,
        }
      }
    ]);
  });
});