import React from "react";
import { useEffect } from "react";
import { Routes, Route, redirect } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import AddForm from "./AddForm";
import ProfilePage from "./ProfilePage";
import ErrorPage from "../ErrorPage";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function AuthComponent() {
  const token = cookies.get("TOKEN");

  useEffect(() => {
    if (!token) {
      redirect("/")
    }
    else {
      redirect("/profile");
    }
  }, []);

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="profilePage" element={<ProfilePage/>}/>
        <Route path="addNote" element={<AddForm/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}
