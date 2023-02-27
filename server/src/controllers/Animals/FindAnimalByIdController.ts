import { Request, Response } from "express";
import { FindAnimalById } from "../../services/Animals/FindAnimalById";
import { AnimalsViewModel } from "../../views/AnimalsViewModel";

export class FindAnimalByIdController {
  constructor (
    private findAnimalById: FindAnimalById,
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const animal = await this.findAnimalById.execute(id);

    return response.status(200).json(AnimalsViewModel.toHTTP(animal));
  }
}