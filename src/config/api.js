import axios from "axios";
import {getToken, removeToken} from "../utils/token";

const axiosInstance = axios.create({
    headers: {
        "Content-type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const data = error?.response?.data;
        if (data.code === "X06") {
            removeToken();
            window.location.reload();
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;
