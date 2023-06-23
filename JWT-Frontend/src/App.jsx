import './App.css'
import { Route, Routes, Navigate } from "react-router-dom"

import { AuthProvider } from './context/useAuth';
import Login from './pages/auth/Login';
import AuthComp from './components/AuthComponent/AuthComp';

import Register from "./pages/auth/Register"
import { getToken } from './services/storage';
import { useSelector } from 'react-redux';

function App() {
  const token = getToken();
  const user = useSelector(state => state.user.user);

  return (
    <AuthProvider userData={token}>
      <Routes>
        {
          user || token ? (
            <>
              <Route path="/home/*" element={<AuthComp />}/>
              <Route path='/*' element={<Navigate to={"/home"} />} />
            </>
          ) : (
            <>
              <Route path='/register' element={<Register />} />
              <Route path='login' element={<Login />} />
              <Route path='/*' element={<Navigate to={"/register"} />} />
            </>
          )
        }
      </Routes>
    </AuthProvider>
  )
}

export default App
