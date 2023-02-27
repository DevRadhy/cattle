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

    if(!animal) {
      return response.status(404).json({
        message: "Animal not found",
      });
    }

    return response.status(200).json(AnimalsViewModel.toHTTP(animal));
  }
}