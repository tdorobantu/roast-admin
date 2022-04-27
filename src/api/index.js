import axios from "axios";

const hostname = process.env.REACT_APP_SERVER_URL

export const createCampaign = data => axios.post(`${hostname}/api/campaign`, data)