import { PrismaClient } from "@prisma/client";
import { ProductionControlRepository } from "../../repositories/ProductionControlRepository";
import { ProductionControlProps } from "../../dtos/AnimalsDTO";
import { PrismaProductionControl } from "../mappers/PrismaProductionControlMappers";

export class PrismaProductionControlRepository implements ProductionControlRepository {
  constructor (
    private prisma: PrismaClient,
  ) {}

  async create(props: ProductionControlProps): Promise<void> {
    const raw = PrismaProductionControl.toPrisma(props);
    
    await this.prisma.productionControl.create({
      data: raw
    });
  }

  async findByAnimalId(id: string): Promise<ProductionControlProps | null> {
    const animalExists = await this.prisma.productionControl.findFirst({
      where: {
        animalId: id,
      }
    });

    if(!animalExists) {
      return null;
    }

    return PrismaProductionControl.toDomain(animalExists);
  }

  async findMany(ownerId: string): Promise<ProductionControlProps[]> {
    const animals = await this.prisma.productionControl.findMany({
      where: {
        animal: {
          ownerId,
        }
      }
    });

    return animals.map(PrismaProductionControl.toDomain);
  }

  async save(props: ProductionControlProps): Promise<void> {
    const raw = PrismaProductionControl.toPrisma(props);

    await this.prisma.productionControl.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });

    return;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.productionControl.delete({
      where: {
        id,
      }
    });

    return;
  }
}