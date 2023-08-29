import Animal from "../../entities/Animal";
import AppError from "../../error/AppError";
import { AnimalsRepository } from "../../repositories/AnimalsRepository";

interface UpdateAnimalRequest {
  id: string;
  identification: string;
  fatherId?: string | null;
  motherId?: string | null;
  gender: number;
  birthDate?: Date | null;
  weight?: number | null;
  description?: string | null;
  ownerId: string;
}

export class UpdateAnimal {
  constructor (
    private animalsRepository: AnimalsRepository,
  ) {}

  async execute(request: UpdateAnimalRequest) {
    const animalExists = await this.animalsRepository.findById(request.id, request.ownerId);

    if(!animalExists) {
      throw new AppError("Animal does not exists.");
    }

    const animal = new Animal(request, animalExists.id);

    await this.animalsRepository.save(animal);
  }
}