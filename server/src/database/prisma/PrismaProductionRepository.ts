import { PrismaClient } from "@prisma/client";
import { ProductionRepository } from "../../repositories/ProductionRepository";
import { ProductionProps } from "../../dtos/AnimalsDTO";
import { PrismaProduction } from "../mappers/PrismaProductionMappers";

export class PrismaProductionRepository implements ProductionRepository {
  constructor (
    private prisma: PrismaClient,
  ) {}

  async create(props: ProductionProps): Promise<void> {
    const raw = PrismaProduction.toPrisma(props);
    
    await this.prisma.production.create({
      data: raw
    });
  }

  async findByAnimalId(id: string): Promise<ProductionProps | null> {
    const animalExists = await this.prisma.production.findFirst({
      where: {
        animalId: id,
      }
    });

    if(!animalExists) {
      return null;
    }

    return PrismaProduction.toDomain(animalExists);
  }

  async findMany(ownerId: string): Promise<ProductionProps[]> {
    const animals = await this.prisma.production.findMany({
      where: {
        animal: {
          ownerId,
        }
      }
    });

    return animals.map(PrismaProduction.toDomain);
  }

  async save(props: ProductionProps): Promise<void> {
    const raw = PrismaProduction.toPrisma(props);

    await this.prisma.production.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });

    return;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.production.delete({
      where: {
        id,
      }
    });

    return;
  }
}