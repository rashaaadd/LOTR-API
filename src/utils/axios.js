import axios from 'axios';


export const API = axios.create({
    baseURL:"https://the-one-api.dev/v2/"
})


API.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${process.env.REACT_APP_API_KEY}`;
        return config;
    }
)