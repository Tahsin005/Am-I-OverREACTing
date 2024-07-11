import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
<<<<<<< HEAD
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ]
=======
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello from react rounter!!</div>,
  },
  {
    path: "/about",
    element: <div>I am in the about page</div>,
  },
  {
    path: "/contact",
    element: <div>I am in the contact page</div>,
>>>>>>> 7fe95182410d5920c2e0a913b7e2f15dff81b5b2
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
