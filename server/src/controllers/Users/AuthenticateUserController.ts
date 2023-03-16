import { Request, Response } from 'express';
import { AuthenticateUser } from '../../services/Users/AuthenticateUser';

export class AuthenticateUserController {
  constructor (
    private authenticateUser: AuthenticateUser,
  ) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const token = await this.authenticateUser.execute({
      email,
      password,
    });

    return response.status(200).json({ token });
  }
}