import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import AddForm from "./AddForm";
import ProfilePage from "./ProfilePage";

export default function AuthComponent() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="profilePage" element={<ProfilePage/>}/>
        <Route path="addNote" element={<AddForm/>}/>
      </Routes>
    </div>
  );
}
