import Animal from "../entities/Animal";

export abstract class AnimalsRepository {
  abstract create(props: Animal): Promise<void>;
}