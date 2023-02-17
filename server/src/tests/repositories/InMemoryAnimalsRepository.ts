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

  async findById(id: string): Promise<Animal | null> {
    const animalExists = this.animals.find((animal) => animal.id === id);

    if(!animalExists) {
      return null;
    }

    return animalExists;
  }

  async save(animal: Animal): Promise<void> {
    const animalExists = this.findById(animal.id);

    if(!animalExists) {
      throw new AppError("Animal does not exists.");
    }

    this.animals = this.animals.map((data) => {
      if(data.props.identification === animal.props.identification) {
        return animal;
      }

      return data;
    });
  }
}