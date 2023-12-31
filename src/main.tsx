import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: "",
    element: <App pageName='Home' />,
  },
  {
    path: "/",
    element: <App pageName='Home' />,
  },
  {
    path: "/projects",
    element: <App pageName='Projects' />,
  },
  {
    path: "/bio",
    element: <App pageName='Bio' />,
  },
  {
    path: "/game",
    element: <App pageName='Game' />,
  },
  {
    path: "/favicon.ico",
    element: <App pageName='Home' />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

