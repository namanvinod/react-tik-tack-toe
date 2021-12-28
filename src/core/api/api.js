import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1000/api';
const config = {
    headers: {

    }
};

export const api = {
    get: (url) => {
        return axios.get(url, config);
    },
    post: (url, body) => {
        return axios.post(url, body);
    }
};