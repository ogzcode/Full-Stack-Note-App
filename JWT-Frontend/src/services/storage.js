import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getToken = () => {
    return cookies.get('token');
}

export const setToken = (token) => {
    cookies.set('token', token, { path: '/' });
}

export const removeToken = () => {
    cookies.remove('token', { path: '/' });
}