import { Routes, Route } from "react-router-dom"

import './App.css'

import AuthLayout from "./pages/auth/AuthLayout"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import Home from "./pages/main/Home"

function App() {

  return (
    <>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
