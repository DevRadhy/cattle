import { createAnimal, findAnimalbyId, updateAnimal, deleteAnimal, findManyAnimals } from "../../services/Animals";
import { CreateAnimalController } from "./CreateAnimalController";
import { DeleteAnimalController } from "./DeleteAnimalController";
import { FindAnimalByIdController } from "./FindAnimalByIdController";
import { FindManyAnimalsController } from "./FindManyAnimalsController";
import { UpdateAnimalController } from "./UpdateAnimalController";

const createAnimalController = new CreateAnimalController(createAnimal);
const findAnimalByIdController = new FindAnimalByIdController(findAnimalbyId);
const updateAnimalController = new UpdateAnimalController(updateAnimal);
const deleteAnimalController = new DeleteAnimalController(deleteAnimal);
const findManyAnimalsController = new FindManyAnimalsController(findManyAnimals);

export {
  createAnimalController,
  findAnimalByIdController,
  updateAnimalController,
  deleteAnimalController,
  findManyAnimalsController,
};