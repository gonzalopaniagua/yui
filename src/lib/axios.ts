import axios from "axios";

export const api = axios.create({
  baseURL: "http://8n7vlqq7l4.execute-api.eu-central-1.amazonaws.com/prod/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors here (e.g., refresh token, logout, etc.)
    return Promise.reject(error);
  }
);
