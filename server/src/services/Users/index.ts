import { prismaUsersRepository } from "../../database";
import { AthenticateUser } from "./AuthenticateUser";
import { CreateUser } from "./CreateUser";
import { DeleteUser } from "./DeleteUser";
import { FindUserByEmail } from "./FindUserByEmail";
import { FindUserById } from "./FindUserById";
import { UpdateUser } from "./UpdateUser";

const creatUser = new CreateUser(prismaUsersRepository);
const findUserByEmail = new FindUserByEmail(prismaUsersRepository);
const findUserById = new FindUserById(prismaUsersRepository);
const updateUser = new UpdateUser(prismaUsersRepository);
const deleteUser = new DeleteUser(prismaUsersRepository);

const authenticateUser = new AthenticateUser(prismaUsersRepository);

export {
  creatUser,
  findUserByEmail,
  findUserById,
  updateUser,
  deleteUser,
  authenticateUser,
};