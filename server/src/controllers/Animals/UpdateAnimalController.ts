import { Request, Response } from "express";
import { UpdateAnimal } from "../../services/Animals/UpdateAnimal";

export class UpdateAnimalController {
  constructor (
    private updateAnimal: UpdateAnimal,
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { identification, fatherId, motherId, birthDate, weight, description } = request.body;

    await this.updateAnimal.execute({
      id,
      identification,
      fatherId,
      motherId,
      birthDate,
      weight,
      description,
    });

    return response.status(200).json({
      message: "Animal updated successfully",
    });
  }
}