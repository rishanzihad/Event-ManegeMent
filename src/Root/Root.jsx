import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayOut from "../MainLayOut/MainLayOut";
import Services from "../Components/ Services/ Services";




const router = createBrowserRouter([
            {
              path: "/",
              element: <MainLayOut></MainLayOut>,
              
              children:[
                
                {
                    path:'/',
                    element:<Home></Home>,
                    loader:()=>fetch('data.json')
                    
                },
                {
                  path:'/service',
                  element:<Services></Services>
                }
              
                
              ]
            },
          ]);

          export default router
