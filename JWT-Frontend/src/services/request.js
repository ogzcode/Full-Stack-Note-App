import axios from 'axios';
import { getToken, removeToken } from './storage';

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

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            console.log("hello ", error.response);
            removeToken();
            window.location.href = '/login';
        }
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

export const updateNoteServices = (data) => {
    return axios.put(`${BASE_URL}/update`, data);
};