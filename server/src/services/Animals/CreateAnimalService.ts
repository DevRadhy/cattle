import Animal from "../../entities/Animal";
import AppError from "../../error/AppError";
import { AnimalsRepository } from "../../repositories/AnimalsRepository";

interface CreateAnimalRequest {
  identification: string;
  fatherId?: string | null;
  motherId?: string | null;
  birthDate?: Date | null;
  weight?: number | null;
  description?: string | null;
}

interface CreateAnimalResponse {
  id: string;
  identification: string;
  fatherId?: string | null;
  motherId?: string | null;
  birthDate?: Date | null;
  weight?: number | null;
  description?: string | null;
}

export class CreateAnimalService {
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
      id: animal.id,
      identification: animal.props.identification,
      fatherId: animal.props.fatherId,
      motherId: animal.props.motherId,
      birthDate: animal.props.birthDate,
      weight: animal.props.weight,
      description: animal.props.description,
    };
  }
}