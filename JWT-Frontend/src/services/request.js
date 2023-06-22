import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const registerServices = (data) => {
    return axios.post(`${BASE_URL}/register`, data);
}

export const loginServices = (data) => {
    return axios.post(`${BASE_URL}/login`, data);
}
