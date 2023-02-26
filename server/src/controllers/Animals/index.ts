import { createAnimal } from "../../services/Animals";
import { CreateAnimalController } from "./CreateAnimalController";

const createAnimalController = new CreateAnimalController(createAnimal);

export { createAnimalController };