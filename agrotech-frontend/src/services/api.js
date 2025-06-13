

import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useMemo } from 'react';


const api = axios.create({
    baseURL: 'https://backend-4t74.onrender.com',
});

export const useApi = () => {
    const { user, isAuthenticated } = useAuth();


    const apiInstance = useMemo(() => {
        const instance = axios.create({
            baseURL: 'https://backend-4t74.onrender.com',
        });

        instance.interceptors.request.use(config => {

            //logs taki console pr print kara ske if the request url and method and header is correct or not
            console.log('Request URL:', config.url);
            console.log('Request method:', config.method);
            console.log('Request headers before sending:', config.headers);

            if (isAuthenticated && user) {
                // authorization header
                const token = btoa(`${user.username}:${user.password}`);
                config.headers.Authorization = `Basic ${token}`;
            }

            if (config.data instanceof FormData) {
                config.headers['Content-Type'] = 'multipart/form-data';
            }

            return config;
        });

        return instance;
    }, [user, isAuthenticated]);

    return apiInstance;
};

export default api;
