import { prismaUsersRepository } from "../../database";
import { CreateUser } from "./CreateUser";
import { DeleteUser } from "./DeleteUser";
import { FindUserByEmail } from "./FindUserByEmail";
import { FindUserById } from "./FindUserById";
import { UpdateUser } from "./UpdateUser";

const createUser = new CreateUser(prismaUsersRepository);
const findUserByEmail = new FindUserByEmail(prismaUsersRepository);
const findUserById = new FindUserById(prismaUsersRepository);
const updateUser = new UpdateUser(prismaUsersRepository);
const deleteUser = new DeleteUser(prismaUsersRepository);

export {
  createUser,
  findUserByEmail,
  findUserById,
  updateUser,
  deleteUser,
};