import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthComp from "./components/AuthComp";

import { ProtectedRoutes } from './ProtectedRoutes.jsx';

import Home from './components/Home.jsx';
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";


const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: 
        <Home/>
      },
      {
        path: "/signup",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoutes>
            <AuthComp/>
          </ProtectedRoutes>
        )
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} />
)
