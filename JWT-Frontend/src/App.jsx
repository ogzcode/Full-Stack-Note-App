import './App.css'
import { useNavigate, Route, Routes, redirect, useLocation, Outlet } from "react-router-dom"

import Cookies from "universal-cookie";
import { AuthProvider } from './context/useAuth';
import { useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import AuthComp from './components/AuthComp';
import { ProtectedRoutes } from './ProtectedRoutes';
import ErrorPage from './components/ErrorPage';
const cookies = new Cookies();

function App() {
  const navigate = useNavigate();
  const token = cookies.get("TOKEN");

  useEffect(() => {
    if (!token) {
      redirect("/register")
    }
    else {
      redirect("/profile");
    }
  }, []);


  return (
    <AuthProvider userData={token}>
      <Routes>
        <Route path='profile/*' element={
          <ProtectedRoutes>
            <AuthComp />
          </ProtectedRoutes>
        }
        />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
