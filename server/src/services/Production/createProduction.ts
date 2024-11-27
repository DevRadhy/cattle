import ProductionControl from "../../entities/Production";
import AppError from "../../error/AppError";
import { ProductionRepository } from "../../repositories/ProductionRepository";

interface productionRequest {
  animalId: string;
  date: Date;
  goal: string;
  price: number;
}

export class CreateProduction {
  constructor (
    private productionControlRepository: ProductionRepository,
  ) {}

  async execute(props: productionRequest) {
    const animalExists = await this.productionControlRepository.findByAnimalId(props.animalId);

    if(animalExists) {
      throw new AppError("Production already exists.");
    }

    const production = new ProductionControl(props);

    await this.productionControlRepository.create(production);

    return production;
  }
}