import axios from "axios";

const hostname = process.env.REACT_APP_SERVER_URL;

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
