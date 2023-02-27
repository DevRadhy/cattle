import { randomUUID } from 'crypto';
import { describe, it, expect } from 'vitest';
import AppError from '../../error/AppError';
import { InMemoryAnimalsRepository } from '../../tests/repositories/InMemoryAnimalsRepository';
import { CreateAnimal } from './CreateAnimal';
import { DeleteAnimal } from './DeleteAnimal';

describe("Delete Animal", () => {
  it("Should be able to delete a animal", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const createAnimal = new CreateAnimal(animalsRepository);
    const deleteAnimal = new DeleteAnimal(animalsRepository);

    const { animal } = await createAnimal.execute({
      identification: "003",
      fatherId: "001",
      motherId: "002",
      birthDate: new Date(),
      weight: 40,
    });

    await deleteAnimal.execute(animal.id);

    expect(animalsRepository.animals).toHaveLength(0);
  });

  it("Should not be able to delete a animal with a invalid ID", async () => {
    const animalsRepository = new InMemoryAnimalsRepository();
    const deleteAnimal = new DeleteAnimal(animalsRepository);

    expect(() => {
      return deleteAnimal.execute(randomUUID());
    }).rejects.toThrow(AppError);
  });
});