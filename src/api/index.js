import axios from "axios";

const hostname = process.env.REACT_APP_SERVER_URL

export const createCampaign = data => axios.post(`${hostname}/api/campaign`, data)
export const register = data => axios.post(`${hostname}/api/user/register`, data)
export const login = data => axios.post(`${hostname}/api/user/login`, data);
export const forgotPass = data => axios.post(`${hostname}/api/user/forgotPass`, data)
export const confirmEmail = data => axios.post(`${hostname}/api/user/confirmEmail`, data) 
export const getCountry = () => axios.get(`https://628b7512667aea3a3e2faa85.mockapi.io/api/mock/dropdown/Country`)
export const getCurrency = () => axios.get(`https://628b7512667aea3a3e2faa85.mockapi.io/api/mock/dropdown/Currency`)