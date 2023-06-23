import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import AddForm from "./AddForm";
import ProfilePage from "./ProfilePage";

export default function AuthComponent() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="profile-page" element={<ProfilePage />} />
        <Route path="add-note" element={<AddForm />} />
        <Route path="*" element={<Navigate to={"/"} /> }/>
      </Routes>
    </div>
  );
}
