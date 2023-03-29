import { prismaAnimalsRepository } from "../../database";
import { CreateAnimal } from "./CreateAnimal";
import { DeleteAnimal } from "./DeleteAnimal";
import { FindAnimalById } from "./FindAnimalById";
import { FindManyAnimals } from "./FindManyAnimals";
import { UpdateAnimal } from "./UpdateAnimal";

const animalsRepository = prismaAnimalsRepository;

const createAnimal = new CreateAnimal(animalsRepository);
const updateAnimal = new UpdateAnimal(animalsRepository);
const deleteAnimal = new DeleteAnimal(animalsRepository);
const findAnimalbyId = new FindAnimalById(animalsRepository);
const findManyAnimals = new FindManyAnimals(animalsRepository);

export { createAnimal, updateAnimal, deleteAnimal, findAnimalbyId, findManyAnimals };