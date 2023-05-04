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
import ChefDetails from './Components/ChefSection/ChefDetails/ChefDetails';
import AuthProviders from './Components/AuthProviders/AuthProviders';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader : ()=>fetch('http://localhost:5000')
      },
      {
        path: "/ChefDetails/:id",
        element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute> ,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)

        
      },
      {
        path: "/Login",
        element: <Login></Login>,
        
      },
      {
        path: "/SignUp",
        element: <SignUp/>,
        
      },
      {
        path: "/blogs",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
        
      },
      {
        path: "/about",
        element:<About></About>,
        
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
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
)
