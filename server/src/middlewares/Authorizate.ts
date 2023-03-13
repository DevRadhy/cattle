import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../error/AppError";

export class Authorizate {
  async verify(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if(!authorization) {
      throw new AppError("Token missing!", 401);
    }

    const [, token] = authorization.split(" ");

    try {
      verify(token, String(process.env.JWT_SECRET));

      return next();
    } catch(error) {
      throw new AppError("Invalid token!", 401);
    }
  }
}