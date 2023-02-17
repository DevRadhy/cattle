import Animal from "../../entities/Animal";
import AppError from "../../error/AppError";
import { AnimalsRepository } from "../../repositories/AnimalsRepository";

export class UpdateAnimal {
  constructor (
    private animalsRepository: AnimalsRepository,
  ) {}

  async execute(animal: Animal) {
    const animalExists = await this.animalsRepository.findById(animal.id);

    if(!animalExists) {
      throw new AppError("Animal does not exists.");
    }

    await this.animalsRepository.save(animal);
  }
}