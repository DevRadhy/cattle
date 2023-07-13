import { Request, Response } from "express";
import { AnimalsViewModel } from "../../views/AnimalsViewModel";
import { CreateAnimal } from "../../services/Animals/CreateAnimal";

export class CreateAnimalController {
  constructor (
    private createAnimal: CreateAnimal,
  ) {}

  async handle(request: Request, response: Response) {
    const { identification, birthDate, fatherId, motherId, gender, weight, description } = request.body;

    const { animal } = await this.createAnimal.execute({
      identification,
      birthDate,
      fatherId,
      motherId,
      gender,
      weight,
      description,
      ownerId: request.user_id,
    });

    return response.status(201).json(AnimalsViewModel.toHTTP(animal));
  }
}