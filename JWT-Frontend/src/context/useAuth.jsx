import { createContext } from "react";
import { useState } from "react";
import React from "react";
import axios from "axios";

import Cookies from "universal-cookie";
import { redirect, useNavigate } from "react-router-dom";
const cookies = new Cookies();

const AuthContext = createContext(null);

export const AuthProvider = ({ userData, children }) => {
    const [user, setUser] = useState(userData);
    const [notes, setNotes] = useState([]);
    const [errorMessage, setError] = useState(null);
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

        await axios(configuration)
            .then(response => {
                setError("");
                navigate("/login");
            })
            .catch((error) => {
                let err = error.toJSON().status;
                if (err === 409) {
                    setError("");
                    navigate("/login");
                }
                else if (err === 400) {
                    setError({ status: 400, message: "All input is required" });
                }
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

        await axios(configuration)
            .then((result) => {
                cookies.set("TOKEN", result.data, {
                    path: "/",
                });
                setUser(result.data);
                navigate("/profile");
            })
            .catch((error) => {
                let err = error.toJSON().status;
                if (err === 404) {
                    setError({});
                    navigate("/register");
                }
                else if (err === 400) {
                    console.log("hello");
                    setError({ status: 400, message: "Passwords does not match!!" });
                    navigate("/login");
                }
            });
    };

    const addNote = async (title, content) => {
        const token = cookies.get("TOKEN");
        const configuration = {
            method: "post",
            url: "http://localhost:3000/auth/addNote",
            headers: {
                Authorization: `Bearer ${token.token}`
            },
            data: {
                title,
                content
            }
        };

        await axios(configuration)
            .then(response => {
                console.log(response);
                navigate("profile");
            })
            .catch((error) => {
                let err = error.toJSON().status;
            });
    };

    const deleteNote = async (index) => {
        const token = cookies.get("TOKEN");
        
        const configuration = {
            method: "delete",
            url: "http://localhost:3000/auth/delete",
            headers: {
                Authorization: `Bearer ${token.token}`
            },
            data: {
                index: index
            }
        };

        await axios(configuration)
            .then(response => {
                console.log(response);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    };

    const logout = () => {
        cookies.remove("TOKEN", { path: "/" });
        setUser("");
        navigate("/login");
    };


    return (
        <AuthContext.Provider value={{ user, setUser, logout, register, 
            login, errorMessage, setError, notes, setNotes, addNote, deleteNote }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);