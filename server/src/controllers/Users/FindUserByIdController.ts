import { Request, Response } from "express";
import { FindUserById } from "../../services/Users/FindUserById";
import { UsersViewModel } from "../../views/UsersViewModel";

export class FindUserByIdController {
  constructor (
    private findUserById: FindUserById,
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const user = await this.findUserById.execute(id);

    return response.status(200).json(UsersViewModel.toHTTP(user));
  }
}