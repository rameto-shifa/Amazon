import axios from "axios";
const axiosInstance = axios.create({
    // baseURL: "https://amazon-api-deploy-1-qtc6.onrender.com",
    // baseURL: "http://localhost:5001",
    baseURL: "https://amazon-api-deploy-1-71kp.onrender.com",
    // deployed version of amazon backend
    // baseURL: "https://amazon-api-deploy-5o05.onrender.com/"
    });
    
    export { axiosInstance };