import axios from "axios";

// Get backend URL from environment or use Vercel URL as fallback
const getBackendApiUrl = () => {
  if (import.meta.env.VITE_BACKEND_API_URL && !import.meta.env.VITE_BACKEND_API_URL.includes('localhost')) {
    return import.meta.env.VITE_BACKEND_API_URL;
  }
  // Fallback to Vercel backend URL
  return 'https://url-shortener-backend-git-main-aviral-mishras-projects-ff8b4a3b.vercel.app/api/v1';
};

const axios_instance = axios.create({
  baseURL: getBackendApiUrl(),
  timeout: 10000,
  withCredentials: true,
});

axios_instance.interceptors.response.use(
  (response) => response, // pass through success responses

  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Backend error:", error.response.data);
    } else if (error.request) {
      // Request made but no response received
      // Don't show alert in production - backend might not be deployed yet
      if (import.meta.env.DEV) {
        console.error("No response from server");
        alert("No response from server");
      } else {
        console.warn("Backend not available - this is normal if backend is not deployed yet");
      }
    } else {
      // Something else happened
      console.error("Axios error:", error.message);
    }

    // returned a rejected promise so you can handle errors locally too
    return Promise.reject(error);
  }
);

export default axios_instance;
