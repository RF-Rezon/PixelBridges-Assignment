import React from "react";
import 'react-circular-progressbar/dist/styles.css';
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-full min-w-full font-body">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
