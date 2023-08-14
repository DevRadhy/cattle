import { prismaUsersRepository } from "../../database";
import { AuthenticateUser } from "./AuthenticateUser";
import { RefreshToken } from "./RefreshToken";

const refreshToken = new RefreshToken(prismaUsersRepository);
const authenticateUser = new AuthenticateUser(prismaUsersRepository);

export { refreshToken, authenticateUser };