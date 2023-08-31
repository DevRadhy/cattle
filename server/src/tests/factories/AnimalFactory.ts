import { randomUUID } from "crypto";
import Animal from "../../entities/Animal";

type Override = Partial<Animal>;

export default function AnimalFactory(override?: Override) {
  return new Animal({
    identification: randomUUID(),
    birthDate: new Date(),
    fatherId: randomUUID(),
    motherId: randomUUID(),
    gender: 0,
    weight: 40,
    ownerId: randomUUID(),
    ...override,
  });
}