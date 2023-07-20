import { Request, Response } from 'express';
import { AuthenticateUser } from '../../services/Users/AuthenticateUser';
import { UsersViewModel } from '../../views/UsersViewModel';

export class AuthenticateUserController {
  constructor (
    private authenticateUser: AuthenticateUser,
  ) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const { token , user } = await this.authenticateUser.execute({
      email,
      password,
    });

    return response.status(201).json({ token , ...UsersViewModel.toHTTP(user) });
  }
}