import axios from "axios";
import {
  authHeader,
  getJwtToken,
  getRefreshToken,
  setJwtToken,
} from "../services/storageJWT";

const hostname = process.env.REACT_APP_SERVER_URL;

const onResponse = (response) => {
  return response;
};

const onResponseError = async (error) => {
  // TODO Test onResponseError
  // TODO Make sure that call with expired token is retried after new token is retrieved
  if (
    error.response.status === 401 &&
    error.response.data.errorType === "tokenExpired"
  ) {
    try {
      const response = await refreshToken({
        refreshToken: getRefreshToken(),
      });
      if (response.status !== 200) {
        return Promise.reject(error);
      }
      setJwtToken(response.data.token);
    } catch (_error) {
      return Promise.reject(_error);
    }
  }
  return Promise.reject(error);
};

axios.interceptors.response.use(onResponse, onResponseError);

export const createCampaign = (data) =>
  axios.post(`${hostname}/api/campaign`, data);
export const register = (data) =>
  axios.post(`${hostname}/api/user/register`, data);
export const login = (data) => axios.post(`${hostname}/api/user/login`, data);
export const forgotPass = (data) =>
  axios.post(`${hostname}/api/user/forgotPass`, data);
export const confirmEmail = (data) =>
  axios.post(`${hostname}/api/user/confirmEmail`, data);
export const resendConfirmation = (data) =>
  axios.post(`${hostname}/api/user/resendConfirmation`, data);
export const resetPassword = (data) =>
  axios.post(`${hostname}/api/user/confirmPassword`, data);
export const initApp = () =>
  axios.get(`${hostname}/api/init/app`, authHeader());
export const refreshToken = (data) =>
  axios.post(`${hostname}/api/tokenServices/refreshToken`, data);
