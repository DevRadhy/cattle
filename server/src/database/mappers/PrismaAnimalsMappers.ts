import Animal from "../../entities/Animal";

export class PrismaAnimalsMappers {
  static toPrisma(animal: Animal) {
    return {
      id: animal.id,
      identification: animal.identification,
      birthdate: animal.birthDate,
      fatherId: animal.fatherId,
      motherId: animal.motherId,
      gender: animal.gender,
      weight: animal.weight,
      description: animal.description,
      ownerId: animal.ownerId,
    };
  }

  static toDomain(raw: any) {
    return new Animal({
      identification: raw.identification,
      birthDate: raw.birthDate,
      fatherId: raw.fatherId,
      motherId: raw.motherId,
      gender: raw.gender,
      weight: raw.weight,
      description: raw.description,
      ownerId: raw.ownerId,
    },
    raw.id
    );
  }
}