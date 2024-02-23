import Animal from "../entities/Animal";

export class AnimalsViewModel {
  public static toHTTP(animal: Animal) {
    return {
      id: animal.id,
      identification: animal.identification,
      fatherId: animal.fatherId,
      motherId: animal.motherId,
      birthDate: animal.birthDate,
      gender: animal.gender,
      weight: animal.weight,
      description: animal.description,
    };
  }
}