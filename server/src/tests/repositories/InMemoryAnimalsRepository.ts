import Animal from "../../entities/Animal";
import AppError from "../../error/AppError";
import { AnimalsRepository } from "../../repositories/AnimalsRepository";

export class InMemoryAnimalsRepository implements AnimalsRepository {
  public animals: Animal[] = [];

  async create(props: Animal): Promise<void> {
    const animalAlreadyExists = this.animals.find((animal) => animal.props.identification === props.props.identification);

    if(animalAlreadyExists) {
      throw new AppError("Animal already exists.");
    }

    this.animals.push(props);
  }
}