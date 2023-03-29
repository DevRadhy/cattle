import { Request, Response } from "express";
import AppError from "../../error/AppError";
import { DeleteUser } from "../../services/Users/DeleteUser";

export class DeleteUserController {
  constructor (
    private deleteUser: DeleteUser,
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    
    if(id !== request.user_id) {
      throw new AppError("Invalid token!", 403);
    }

    await this.deleteUser.execute(id);

    return response.status(204).send();
  }
}