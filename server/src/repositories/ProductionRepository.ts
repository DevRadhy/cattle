import Production from "../entities/Production";

export abstract class ProductionRepository {
  abstract create(props: Production): Promise<void>;
  abstract findByAnimalId(id: string): Promise<Production | null>;
  abstract findMany(ownerId: string): Promise<Production[]>;
  abstract save(props: Production): Promise<void>;
  abstract delete(id: string): Promise<void>;
}