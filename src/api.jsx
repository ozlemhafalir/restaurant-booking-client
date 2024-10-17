import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_HOST
});

api.interceptors.request.use(
    (config) => {
        const access = localStorage.getItem('access');
        if (access) {
            config.headers.Authorization = `Bearer ${access}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refresh');
                const response = await api.post('/token/refresh/', {refreshToken});
                const {token} = response.data;

                localStorage.setItem('access', token);

                originalRequest.headers.Authorization = `Bearer ${token}`;
                return api(originalRequest);
            } catch (error) {
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
                if (window.location.href !== '/auth/login') {
                    window.location.href = '/auth/login';
                }
            }
        }
        return Promise.reject(error);
    }
);

export default api;
