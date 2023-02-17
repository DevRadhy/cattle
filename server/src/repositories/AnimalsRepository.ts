import Animal from "../entities/Animal";

export abstract class AnimalsRepository {
  abstract create(props: Animal): Promise<void>;
  abstract findById(id: string): Promise<Animal | null>;
  abstract save(animal: Animal): Promise<void>;
}