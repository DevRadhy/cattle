import { Request, Response } from "express";
import { CreateUser } from "../../services/Users/CreateUser";
import { UsersViewModel } from "../../views/UsersViewModel";

export class CreateUserController {
  constructor (
    private createUser: CreateUser,
  ) {}

  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const { user } = await this.createUser.execute({ name, email, password });

    return response.status(201).json(UsersViewModel.toHTTP(user));
  }
}