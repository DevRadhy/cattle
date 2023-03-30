import AppError from "../../error/AppError";
import { AnimalsRepository } from "../../repositories/AnimalsRepository";

export class FindAnimalById {
  constructor (
    private animalsRepository: AnimalsRepository,
  ) {}

  async execute(id: string, ownerId: string) {
    const animal = await this.animalsRepository.findById(id, ownerId);

    if(!animal) {
      throw new AppError("Animal does not exists.");
    }

    return animal;
  }
}