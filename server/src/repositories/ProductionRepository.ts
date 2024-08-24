import { ProductionProps } from "../dtos/AnimalsDTO";

export abstract class ProductionRepository {
  abstract create(props: ProductionProps): Promise<void>;
  abstract findByAnimalId(id: string): Promise<ProductionProps | null>;
  abstract findMany(ownerId: string): Promise<ProductionProps[]>;
  abstract save(props: ProductionProps): Promise<void>;
  abstract delete(id: string): Promise<void>;
}