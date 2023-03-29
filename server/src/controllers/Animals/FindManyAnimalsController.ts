import { Request, Response } from "express";
import AppError from "../../error/AppError";
import { FindManyAnimals } from "../../services/Animals/FindManyAnimals";
import { AnimalsViewModel } from "../../views/AnimalsViewModel";

export class FindManyAnimalsController {
  constructor (
    private findManyAnimals: FindManyAnimals,
  ) {}

  async handle(request: Request, response: Response) {
    const { ownerId } = request.params;

    if(ownerId !== request.user_id) {
      throw new AppError("Invalid token!", 403);
    }

    const animals = await this.findManyAnimals.execute(ownerId);

    const animalsResponse = animals.map((animal) => AnimalsViewModel.toHTTP(animal));

    return response.json(animalsResponse);
  }
}