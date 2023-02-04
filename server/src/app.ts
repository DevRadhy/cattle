import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import AppError from "./error/AppError";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use((error: Error, request: Request, response: Response, _next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message
    });
  }

  return response.status(500).json({
    message: "Internal Server Error",
  });
});

export default app;