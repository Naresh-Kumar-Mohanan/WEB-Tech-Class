import { createBrowserRouter,RouterProvider } from "react-router-dom";

import React from 'react'
import Nav from "./Nav";
import Home from "./Home";
import Users from "./Users";
import Login from "./Login";
import Signup from "./Signup";
import Error from "./Error";

let myRouter = createBrowserRouter([{
  path:"/",
  element:<Nav></Nav>,
  errorElement:<Error></Error>,
  children:[{
    path: "home",
    element:<Home></Home> 
  },{
    path: "users",
    element:<Users></Users>
  },{
    path:"login",
    element:<Login></Login>
  },{
    path:"signup",
    element:<Signup></Signup>
  }]
},
// {
//   path:"/home",
//   element: <>
//     <Nav></Nav>
//     <Home></Home>
//   </>
// },
// {
//   path:"/login",
//   element: <div>
//     <Nav></Nav>
//     <Login></Login>
//   </div>
// }

])

const App = () => {
  return (
    <RouterProvider router={myRouter}>

    </RouterProvider>
      
  )
}

export default App
