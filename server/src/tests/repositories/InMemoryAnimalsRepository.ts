import Animal from "../../entities/Animal";
import AppError from "../../error/AppError";
import { AnimalsRepository } from "../../repositories/AnimalsRepository";

export class InMemoryAnimalsRepository implements AnimalsRepository {
  public animals: Animal[] = [];

  async create(animal: Animal): Promise<void> {
    const animalAlreadyExists = this.animals.find((data) => data.identification === animal.identification);

    if(animalAlreadyExists) {
      throw new AppError("Animal already exists.");
    }

    this.animals.push(animal);
  }

  async findById(id: string, ownerId: string): Promise<Animal | null> {
    const animalExists = this.animals.find((animal) => animal.id === id && animal.ownerId === ownerId);

    if(!animalExists) {
      return null;
    }

    return animalExists;
  }

  async findMany(ownerId: string): Promise<Animal[]> {
    const animals = this.animals.filter((animal) => animal.ownerId === ownerId);

    return animals;
  }

  async save(animal: Animal): Promise<void> {
    const animalIndex = this.animals.findIndex((data) => data.id === animal.id);

    if(animalIndex < 0) {
      throw new AppError("Animal does not exists.");
    }

    this.animals[animalIndex] = animal;
  }

  async delete(id: string, ownerId: string): Promise<void> {
    const animalExists = this.findById(id, ownerId);

    if(!animalExists) {
      throw new AppError("Animal does not exists.");
    }

    this.animals = this.animals.filter((animal) => animal.id !== id);
  }
}