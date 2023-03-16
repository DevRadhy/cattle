import { Request, Response } from "express";
import AppError from "../../error/AppError";
import { FindUserByEmail } from "../../services/Users/FindUserByEmail";
import { UsersViewModel } from "../../views/UsersViewModel";

export class FindUserByEmailController {
  constructor (
    private findUserByEmail: FindUserByEmail,
  ) {}

  async handle(request: Request, response: Response) {
    const { email } = request.query;

    if(!email) {
      throw new AppError("Email is required.");
    }

    if(typeof email !== "string") {
      throw new AppError("Email must be a string.");
    }

    const user = await this.findUserByEmail.execute(email);

    return response.status(200).json(UsersViewModel.toHTTP(user));
  }
}