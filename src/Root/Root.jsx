import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayOut from "../MainLayOut/MainLayOut";

import ServiceDetails from "../Pages/ServicePage/ServiceDetails";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import BookedPage from "../Pages/Booked/BookedPage";
import About from "../Pages/About/About";






const router = createBrowserRouter([
            {
              path: "/",
              element: <MainLayOut></MainLayOut>,
              errorElement:<ErrorPage></ErrorPage>,
              children:[
                
                {
                    path:'/',
                    element:<Home></Home>,
                    loader:()=>fetch('/data.json')
                    
                },
                {
                  path:'/login',
                  element:<Login></Login>
                },
                {
                    path:'/details/:id',
                    element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                    loader:()=>fetch('/data.json')
                    
                },
                {
                  path:'/register',
                  element:<Register></Register>
                },
                {
                  path:'/booked',
                  element:<PrivateRoute><BookedPage></BookedPage></PrivateRoute>
                },
                {
                  path:'/about',
                  element:<PrivateRoute><About></About></PrivateRoute>
                },
              
                
              ]
            },
          ]);

          export default router
