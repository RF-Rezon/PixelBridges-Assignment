import * as React from "react";
import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App.jsx";
import Dashboard from "../Pages/Dashboard.jsx";
import Earn from "../Pages/Earn.jsx";
import LandingPage from "../Pages/LandingPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <LandingPage />
        },
        {
            path: "/dashboard",
            element: <Dashboard />
        },
        {
            path: "/earn",
            element: <Earn />
        }
    ]
  },
]);



