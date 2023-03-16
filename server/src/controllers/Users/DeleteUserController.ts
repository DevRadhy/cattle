import { Request, Response } from "express";
import { DeleteUser } from "../../services/Users/DeleteUser";

export class DeleteUserController {
  constructor (
    private deleteUser: DeleteUser,
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    await this.deleteUser.execute(id);

    return response.status(204).send();
  }
}