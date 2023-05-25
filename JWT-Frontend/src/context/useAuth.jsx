import { createContext } from "react";
import { useState } from "react";
import React from "react";
import axios from "axios";

import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const cookies = new Cookies();

const AuthContext = createContext(null);

export const AuthProvider = ({ userData, children }) => {
    const [user, setUser] = useState(userData);
    const navigate = useNavigate();

    const register = async (email, password) => {
        const configuration = {
            method: "post",
            url: "http://localhost:3000/register",
            data: {
                email,
                password
            }
        };

        axios(configuration)
            .then((result) => {
                navigate("/login");
            })
            .catch((error) => {
                error = new Error();
            });
    };

    const login = async (email, password) => {
        const configuration = {
            method: "post",
            url: "http://localhost:3000/login",
            data: {
                email,
                password
            }
        }

        axios(configuration)
            .then((result) => {
                console.log(result.data);
                cookies.set("TOKEN", result.data, {
                    path: "/",
                });
                setUser(result.data);
                navigate("/profile");
            })
            .catch((error) => {
                error = new Error();
            });
    };

    const logout = () => {
        cookies.remove("TOKEN", { path: "/" });
        setUser("");
        navigate("/");
    };


    return (
        <AuthContext.Provider value={{ user, setUser, logout, register, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);