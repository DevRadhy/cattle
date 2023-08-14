import { Request, Response } from "express";
import { RefreshToken } from "../../services/Auth/RefreshToken";

export class RefreshTokenController {
  constructor (
    private refreshToken: RefreshToken,
  ) {}

  async handle(request: Request, response: Response) {
    const refreshToken = await this.refreshToken.execute(request.user_id);

    return response.json(refreshToken);
  }
}