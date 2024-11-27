import { Request, Response } from "express";
import { z } from "zod";
import { CreateProduction } from "../../services/Production/createProduction";
import { ProductionViewModel } from "../../views/ProductionViewModel";

export class CreateProductionController {
  constructor (
    private createProduction: CreateProduction,
  ) {}

  async handle(request: Request, response: Response) {
    const CreateAnimalProps = z.object({
      animalId: z.string(),
      date: z.string(),
      goal: z.string(),
      price: z.number(),
    });

    const { animalId, date, goal, price } = CreateAnimalProps.parse(request.body);

    const production = await this.createProduction.execute({
      animalId,
      date: new Date(date),
      goal,
      price,
    });

    return response.status(201).json(ProductionViewModel.toHTTP(production));
  }
}