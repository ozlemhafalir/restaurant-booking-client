import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_HOST
});

api.interceptors.request.use(
    (config) => {
        const access = localStorage.getItem('access');
        if(access) {
            config.headers.Authorization = `Bearer ${access}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

export default api;
