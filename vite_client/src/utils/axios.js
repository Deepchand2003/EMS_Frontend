import axios from "axios";
 
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://server-f8bw.onrender.com",
  withCredentials: true, // Important for sending cookies (auth)
});
 
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login"; // redirect to login
    }
    return Promise.reject(error);
  }
);
 
export default instance;