import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import AppError from "../error/AppError";

interface JWT_Payload {
  user_id: string;
  iat: number;
  exp: number;
}

export class Authorizate {
  async verify(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if(!authorization) {
      throw new AppError("Token missing!", 401);
    }

    const [, token] = authorization.split(" ");

    try {
      verify(token, String(process.env.JWT_SECRET));

      const { user_id } = decode(token) as JWT_Payload;

      request.user_id = user_id;

      return next();
    } catch(error) {
      throw new AppError("Invalid token!", 401);
    }
  }
}