// import axios from 'axios';
//
// const api = axios.create({
//     baseURL: 'http://localhost:8080', // adjust if your Spring Boot runs on another port
//     headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Basic ${token}`,
//     },
// });
//
// export default api;

// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
//
// // Create an axios instance
// const api = axios.create({
//     baseURL: 'http://localhost:8080', // change if needed
// });
//
// // Add a request interceptor to add Basic Auth header from context
// export const useApi = () => {
//     const { auth } = useAuth();
//
//     // Add the interceptor each time useApi is called (e.g. inside React components)
//     api.interceptors.request.use(config => {
//         console.log('Request URL:', config.url);
//         console.log('Request method:', config.method);
//         console.log('Request headers before sending:', config.headers);
//         if (auth.isAuthenticated) {
//             const token = btoa(`${auth.username}:${auth.password}`);
//             config.headers.Authorization = `Basic ${token}`;
//         }
//         return config;
//     });
//
//     return api;
// };
//
// export default api;

// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
//
// export const useApi = () => {
//     const { isAuthenticated, user } = useAuth();
//
//     const apiInstance = axios.create({
//         baseURL: 'http://localhost:8080', // double-check this URL
//     });
//
//     apiInstance.interceptors.request.use(config => {
//         if (isAuthenticated && user) {
//             // Assuming you store username and password in user or auth context - avoid storing raw passwords in prod
//             const token = btoa(`${user.username}:${user.password}`);
//             config.headers.Authorization = `Basic ${token}`;
//         }
//         return config;
//     });
//
//     return apiInstance;
// };
//
// export default useApi;

import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useMemo } from 'react';

// Create a plain axios instance
const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const useApi = () => {
    const { user, isAuthenticated } = useAuth();

    // Create a new axios instance with interceptor whenever user or auth changes
    const apiInstance = useMemo(() => {
        const instance = axios.create({
            baseURL: 'https://backend-4t74.onrender.com',
        });

        instance.interceptors.request.use(config => {
            console.log('Request URL:', config.url);
            console.log('Request method:', config.method);
            console.log('Request headers before sending:', config.headers);

            if (isAuthenticated && user) {
                // Assuming user has username and password stored (or better, a token)
                const token = btoa(`${user.username}:${user.password}`);
                config.headers.Authorization = `Basic ${token}`;
            }
            return config;
        });

        return instance;
    }, [user, isAuthenticated]);

    return apiInstance;
};

export default api;
