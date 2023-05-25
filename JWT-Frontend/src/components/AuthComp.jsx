import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/useAuth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function AuthComponent() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const token = cookies.get("TOKEN");

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://localhost:3000/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    };

    axios(config)
      .then(result => {
        setMessage(result.data.message);
      })
      .catch(e => {
        e = new Error();
      });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "100vh"}}>
      <h1 className="text-center">Profile Page</h1>
      <h3 className="text-center text-danger">{message}</h3>
      <Button type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
