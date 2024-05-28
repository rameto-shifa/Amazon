import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: "http://127.0.0.1:4002/clone-3b183/us-central1/api",
    // baseURL: "https://amazon-api-deploy-1-qtc6.onrender.com"
  });
  
  export { axiosInstance };