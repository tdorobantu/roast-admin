import axios from "axios";
import { authHeader, setJwtToken } from "../services/storageJWT";
import { getRefreshToken } from "../services/storageJWT";

const hostname =
  process.env.REACT_APP_HTTPS_ON === "true"
    ? process.env.REACT_APP_SERVER_SECURE_URL
    : process.env.REACT_APP_SERVER_URL;

// * Allows cookies to be sent back to the API
const instance = axios.create({
  withCredentials: true,
  baseURL: hostname,
});

const onResponse = (response) => {
  return response;
};

const onResponseError = async (error) => {
  if (
    error.response.status === 401 &&
    error.response.data.errorType === "tokenExpired"
  ) {
    try {
      const token = getRefreshToken();
      const response = await refreshToken({ refreshToken: token });
      setJwtToken(response.data.token);
      // Set authorization header of retry call to have token returned by refreshToken endpoint
      error.response.config.headers.Authorization = `Bearer ${response.data.token}`;
      return instance(error.response.config);
    } catch (_error) {
      console.log(_error);
      return Promise.reject(_error);
    }
  }
  return Promise.reject(error);
};

instance.interceptors.response.use(onResponse, onResponseError);

export const createCampaign = (data) =>
  instance.post(`${hostname}/api/campaign`, data);
export const register = (data) =>
  instance.post(`${hostname}/api/user/register`, data);
export const login = (data) =>
  instance.post(`${hostname}/api/user/login`, data);
export const forgotPass = (data) =>
  instance.post(`${hostname}/api/user/forgotPass`, data);
export const confirmEmail = (data) =>
  instance.post(`${hostname}/api/user/confirmEmail`, data);
export const resendConfirmation = (data) =>
  instance.post(`${hostname}/api/user/resendConfirmation`, data);
export const resetPassword = (data) =>
  instance.post(`${hostname}/api/user/confirmPassword`, data);
export const initApp = () =>
  instance.get(`${hostname}/api/init/app`, authHeader());
export const refreshToken = (data) =>
  instance.post(
    `${hostname}/api/tokenServices/refreshToken`,
    data,
    authHeader()
  );
