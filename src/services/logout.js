import { deleteJwtToken } from "./storageJWT";
import { deleteRefreshToken } from "./storageJWT";

const logout = (navigateFn) => {
  deleteJwtToken();
  deleteRefreshToken();
  navigateFn("./login ", { replace: true });
};

export default logout;
