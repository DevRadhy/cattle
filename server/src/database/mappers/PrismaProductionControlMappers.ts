import { ProductionControlProps } from "../../dtos/AnimalsDTO";

export class PrismaProductionControl {
  static toPrisma(data: ProductionControlProps) {
    return {
      id: data.id,
      animalId: data.animalId,
      date: data.date,
      goal: data.goal,
      price: data.price,
    };
  }

  static toDomain(raw: any) {
    return {
      id: raw.id,
      animalId: raw.animalId,
      date: new Date(raw.date),
      goal: raw.goal,
      price: Number(raw.price),
    };
  }
}