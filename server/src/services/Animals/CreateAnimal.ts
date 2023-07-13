import Animal from "../../entities/Animal";
import AppError from "../../error/AppError";
import { AnimalsRepository } from "../../repositories/AnimalsRepository";

interface CreateAnimalRequest {
  identification: string;
  birthDate?: Date | null;
  fatherId?: string | null;
  motherId?: string | null;
  gender: number;
  weight?: number | null;
  description?: string | null;
  ownerId: string;
}

interface CreateAnimalResponse {
  animal: Animal;
}

export class CreateAnimal {
  constructor (
    private animalsRepository: AnimalsRepository,
  ) {}

  async execute(props: CreateAnimalRequest): Promise<CreateAnimalResponse> {
    if(!props.identification) {
      throw new AppError("Identification is required.");
    }

    const animal = new Animal(props);

    await this.animalsRepository.create(animal);

    return {
      animal
    };
  }
}