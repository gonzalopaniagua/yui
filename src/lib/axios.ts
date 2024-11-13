import axios from "axios";

export const api = axios.create({
  baseURL: "https://y66eiympjd.execute-api.eu-central-1.amazonaws.com/prod/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors here (e.g., refresh token, logout, etc.)
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);
