import Animal from "../../entities/Animal";

export class PrismaAnimalsMappers {
  static toPrisma(animal: Animal) {
    return {
      id: animal.id,
      identification: animal.identification,
      fatherId: animal.fatherId,
      motherId: animal.motherId,
      birthDate: animal.birthDate,
      weight: animal.weight,
      description: animal.description,
    };
  }

  static toDomain(raw: any) {
    return new Animal({
      identification: raw.identification,
      fatherId: raw.fatherId,
      motherId: raw.motherId,
      weight: raw.weight,
      birthDate: raw.birthDate,
      description: raw.description,
    },
    raw.id
    );
  }
}