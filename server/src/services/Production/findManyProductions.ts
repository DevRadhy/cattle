import { ProductionRepository } from "../../repositories/ProductionRepository";

export class FindManyProductions {
  constructor(
    private productionRepository: ProductionRepository
  ) {}

  async execute(ownerId: string) {
    const productions = await this.productionRepository.findMany(ownerId);

    return productions;
  }
}