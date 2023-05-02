import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/404 Page/Error';
import Home from './Components/Home/Home';
import Main from './Components/LayOut/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      }
    ]
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
