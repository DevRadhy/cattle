import { authenticateUser, createUser, deleteUser, findUserByEmail, findUserById, updateUser } from "../../services/Users";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { CreateUserController } from "./CreateUserController";
import { DeleteUserController } from "./DeleteUserController";
import { FindUserByEmailController } from "./FindUserByEmailController";
import { FindUserByIdController } from "./FindUserByIdController";
import { UpdateUserController } from "./UpdateUserController";

const createUserController = new CreateUserController(createUser);
const findUserByEmailController = new FindUserByEmailController(findUserByEmail);
const findUserByIdController = new FindUserByIdController(findUserById);
const updateUserController = new UpdateUserController(updateUser);
const deleteUserController = new DeleteUserController(deleteUser);

const authenticateUserController = new AuthenticateUserController(authenticateUser);

export {
  createUserController,
  findUserByEmailController,
  findUserByIdController,
  updateUserController,
  deleteUserController,
  authenticateUserController,
};