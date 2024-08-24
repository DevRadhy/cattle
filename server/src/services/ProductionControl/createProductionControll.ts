import ProductionControl from "../../entities/ProductionControl";
import AppError from "../../error/AppError";
import { ProductionControlRepository } from "../../repositories/ProductionControlRepository";

interface productionControllRequest {
  animalId: string;
  date: Date;
  goal: string;
  price: number;
}

export class CreateProductionControll {
  constructor (
    private productionControlRepository: ProductionControlRepository,
  ) {}

  async execute(props: productionControllRequest) {
    const animalExists = await this.productionControlRepository.findByAnimalId(props.animalId);

    if(animalExists) {
      throw new AppError("Production already exists.");
    }

    const production = new ProductionControl(props);

    await this.productionControlRepository.create(production);

    return production;
  }
}