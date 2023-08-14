import { authenticateUser, refreshToken } from "../../services/Auth";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { RefreshTokenController } from "./RefreshTokenController";

const refreshTokenContrller = new RefreshTokenController(refreshToken);
const authenticateUserController = new AuthenticateUserController(authenticateUser);

export { refreshTokenContrller, authenticateUserController };