import { ProductionControlProps } from "../dtos/AnimalsDTO";

export abstract class ProductionControlRepository {
  abstract create(props: ProductionControlProps): Promise<void>;
  abstract findByAnimalId(id: string): Promise<ProductionControlProps | null>;
  abstract findMany(ownerId: string): Promise<ProductionControlProps[]>;
  abstract save(props: ProductionControlProps): Promise<void>;
  abstract delete(id: string): Promise<void>;
}