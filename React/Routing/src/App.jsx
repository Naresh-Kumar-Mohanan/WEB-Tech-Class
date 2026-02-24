import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Cart from './Cart';


let myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }, {
        path: "/login",
        element: <Login />
    }, {
        path: "/cart",
        element: <Cart />
    }
])


const App = () => {
    return (
        <div>
            <RouterProvider router={myRouter} />
        </div>
    )
}


export default App