import axios from 'axios';
import { getToken } from './storage';

const BASE_URL = 'http://localhost:3000';

axios.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const registerServices = (data) => {
    return axios.post(`${BASE_URL}/register`, data);
}

export const loginServices = (data) => {
    return axios.post(`${BASE_URL}/login`, data);
}




export const getAllNotesServices = () => {
    return axios.get(`${BASE_URL}/notes`);
}

export const addNoteServices = (data) => {
    return axios.post(`${BASE_URL}/add-note`, data);
}

export const deleteNoteServices = (id) => {
    return axios.delete(`${BASE_URL}/delete/${id}`);
}