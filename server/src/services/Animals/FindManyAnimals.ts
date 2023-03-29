import { AnimalsRepository } from "../../repositories/AnimalsRepository";

export class FindManyAnimals {
  constructor (
    private animalsRepository: AnimalsRepository,
  ) {}

  async execute(ownerId: string) {
    const animals = await this.animalsRepository.findMany(ownerId);

    return animals;
  }
}