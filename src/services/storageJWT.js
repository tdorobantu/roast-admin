import axios from "axios";

// Short duration JWT token (5-10 min)
export const getJwtToken = () => {
  return sessionStorage.getItem("jwt");
};

export const setJwtToken = (token) => {
  sessionStorage.setItem("jwt", token);
};

// Longer duration refresh token (30-60 min)
export const getRefreshToken = () => {
  return sessionStorage.getItem("refreshToken");
};

export const setRefreshToken = (token) => {
  sessionStorage.setItem("refreshToken", token);
};

export const authHeader = () => {
  const token = getJwtToken();
  if (token !== null) {
    console.log("token is: ", token);
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  } else {
    return {};
  }
};
