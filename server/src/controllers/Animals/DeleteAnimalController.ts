import { Request, Response } from "express";
import { DeleteAnimal } from "../../services/Animals/DeleteAnimal";

export class DeleteAnimalController {
  constructor (
    private deleteAnimal: DeleteAnimal,
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    await this.deleteAnimal.execute(id, request.user_id);

    return response.status(200).json({
      message: "Animal deleted successfully",
    });
  }
}