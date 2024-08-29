import { Request, Response } from "express";
import { FindManyProductions } from "../../services/Production/findManyProductions";
import { ProductionViewModel } from "../../views/ProductionViewModel";

export class FindManyProductionsController {
  constructor(
    private findManyProductions: FindManyProductions,
  ) {}

  async handle(request: Request, response: Response) {
    const { ownerId } = request.params;

    const productions = await this.findManyProductions.execute(ownerId);

    return response.json(productions.map((production) => ProductionViewModel.toHTTP(production)));
  }
}