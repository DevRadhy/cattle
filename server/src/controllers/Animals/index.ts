import { createAnimal, findAnimalbyId, updateAnimal, deleteAnimal } from "../../services/Animals";
import { CreateAnimalController } from "./CreateAnimalController";
import { DeleteAnimalController } from "./DeleteAnimalController";
import { FindAnimalByIdController } from "./FindAnimalByIdController";
import { UpdateAnimalController } from "./UpdateAnimalController";

const createAnimalController = new CreateAnimalController(createAnimal);
const findAnimalByIdController = new FindAnimalByIdController(findAnimalbyId);
const updateAnimalController = new UpdateAnimalController(updateAnimal);
const deleteAnimalController = new DeleteAnimalController(deleteAnimal);

export {
  createAnimalController,
  findAnimalByIdController,
  updateAnimalController,
  deleteAnimalController
};