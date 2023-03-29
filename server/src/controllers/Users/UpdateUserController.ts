import { Request, Response } from "express";
import AppError from "../../error/AppError";
import { UpdateUser } from "../../services/Users/UpdateUser";

export class UpdateUserController {
  constructor (
    private updateUser: UpdateUser,
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, password } = request.body;

    if(id !== request.user_id) {
      throw new AppError("Invalid token!", 403);
    }

    await this.updateUser.execute({
      id,
      name,
      email,
      password,
    });

    return response.status(200).send();
  }
}