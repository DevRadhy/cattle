import Animal from "../../entities/Animal";
import { AnimalsRepository } from "../../repositories/AnimalsRepository";

export class InMemoryAnimalsRepository implements AnimalsRepository {
  public animals: Animal[] = [];

  async create(props: Animal): Promise<void> {
    this.animals.push(props);
  }
}