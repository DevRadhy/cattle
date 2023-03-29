import { PrismaClient } from "@prisma/client";
import Animal from "../../entities/Animal";
import { AnimalsRepository } from "../../repositories/AnimalsRepository";
import { PrismaAnimalsMappers } from "../mappers/PrismaAnimalsMappers";

export class PrismaAnimalsRepository implements AnimalsRepository {
  constructor (
    private prisma: PrismaClient,
  ) {}

  async create(props: Animal): Promise<void> {
    const raw = PrismaAnimalsMappers.toPrisma(props);

    await this.prisma.animal.create({
      data: raw
    });
  }

  async findById(id: string): Promise<Animal | null> {
    const animal = await this.prisma.animal.findFirst({
      where: {
        id
      }
    });

    if(!animal) {
      return null;
    }

    return PrismaAnimalsMappers.toDomain(animal);
  }

  async findMany(ownerId: string): Promise<Animal[]> {
    const animals = await this.prisma.animal.findMany({
      where: {
        ownerId,
      }
    });

    return animals.map(PrismaAnimalsMappers.toDomain);
  }

  async save(animal: Animal): Promise<void> {
    const raw = PrismaAnimalsMappers.toPrisma(animal);

    await this.prisma.animal.update({
      where: {
        id: animal.id
      },
      data: raw
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.animal.delete({
      where: {
        id
      }
    });
  }
}