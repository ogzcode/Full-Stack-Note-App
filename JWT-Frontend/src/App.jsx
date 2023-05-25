import './App.css'
import { Link, Outlet } from "react-router-dom"
import NavBar from "./components/NavBar";

import { AuthProvider } from './context/useAuth';

import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const token = cookies.get("TOKEN");

  return (
    <AuthProvider userData={token}>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </AuthProvider>
  )
}

export default App
