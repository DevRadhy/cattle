import Production from "../entities/Production";

export class ProductionViewModel {
  public static toHTTP(production: Production) {
    return {
      id: production.id,
      identification: production.animalId,
      fatherId: production.date,
      motherId: production.goal,
      birthDate: production.price,
    };
  }
}