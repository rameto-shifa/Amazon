import axios from "axios";
const axiosInstance = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://amazon-api-deploy-1-qtc6.onrender.com",
    });
    
    export { axiosInstance };