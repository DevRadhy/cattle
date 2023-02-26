import { Request, Response } from "express";
import { AnimalsViewModel } from "../../Views/AnimalsViewModel";
import { CreateAnimal } from "../../services/Animals/CreateAnimal";

export class CreateAnimalController {
  constructor (
    private createAnimal: CreateAnimal,
  ) {}

  async handle(request: Request, response: Response) {
    const { identification, fatherId, motherId, birthDate, weight, description } = request.body;

    const { animal } = await this.createAnimal.execute({
      identification,
      fatherId,
      motherId,
      birthDate,
      weight,
      description,
    });

    return response.status(201).json(AnimalsViewModel.toHTTP(animal));
  }
}