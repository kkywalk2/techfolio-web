import axios, {InternalAxiosRequestConfig} from 'axios';
import {parseCookies} from 'nookies';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const cookies = parseCookies();
    const token = cookies['firebase-jwt-token'];
    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
