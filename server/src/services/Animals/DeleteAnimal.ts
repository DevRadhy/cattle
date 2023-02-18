import AppError from "../../error/AppError";
import { AnimalsRepository } from "../../repositories/AnimalsRepository";

export class DeleteAnimal {
  constructor (
    private animalsRepository: AnimalsRepository,
  ) {}

  async execute(id: string) {
    const AnimalExists = await this.animalsRepository.findById(id);

    if(!AnimalExists) {
      throw new AppError("Animal does not exists.");
    }

    await this.animalsRepository.delete(id);
  }
}