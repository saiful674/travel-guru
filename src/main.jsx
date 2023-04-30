import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Home/Main.jsx';
import Home from './Components/Home/Home/Home.jsx';
import Destination from './Components/Destination/Destination.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
     {
      path : '/',
      element: <Home></Home>
     },
     {
      path : '/destination',
      element: <Destination></Destination>,
      loader: ()=> fetch("/destination.json")
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
