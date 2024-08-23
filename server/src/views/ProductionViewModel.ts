import ProductionControl from "../entities/ProductionControl";

export class ProductionViewModel {
  public static toHTTP(production: ProductionControl) {
    return {
      id: production.id,
      identification: production.animalId,
      fatherId: production.date,
      motherId: production.goal,
      birthDate: production.price,
    };
  }
}