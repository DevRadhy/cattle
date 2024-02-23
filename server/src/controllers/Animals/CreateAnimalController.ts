import { Request, Response } from "express";
import { AnimalsViewModel } from "../../views/AnimalsViewModel";
import { CreateAnimal } from "../../services/Animals/CreateAnimal";
import { z } from "zod";

export class CreateAnimalController {
  constructor (
    private createAnimal: CreateAnimal,
  ) {}

  async handle(request: Request, response: Response) {
    const CreateAnimalProps = z.object({
      identification: z.string(),
      birthDate: z.string(),
      fatherId: z.string().optional(),
      motherId: z.string().optional(),
      gender: z.number(),
      weight: z.number(),
      description: z.string().optional(),
    });

    const { identification, birthDate, fatherId, motherId, gender, weight, description } = CreateAnimalProps.parse(request.body);

    const { animal } = await this.createAnimal.execute({
      identification,
      birthDate: new Date(birthDate),
      fatherId,
      motherId,
      gender,
      weight,
      description,
      ownerId: request.user_id,
    });

    return response.status(201).json(AnimalsViewModel.toHTTP(animal));
  }
}