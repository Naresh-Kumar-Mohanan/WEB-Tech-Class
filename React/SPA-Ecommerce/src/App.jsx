import React, { createContext, useReducer } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'

function reducer(state, action) {

}

export let myContext = createContext()

const App = () => {

  let [state, dispatch] = useReducer(
    reducer, {
    allProduct: [],
    oneProduct: {
      cart: [],
      loading: true,
      error: false
    }
  })

  let myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        {
          path: "home",
          element: <Home />
        }
      ]
    }
  ])

  return (
    <div>
      <myContext.Provider value={{ ...state, dispatch }}>
        <RouterProvider router={myRouter} />
      </myContext.Provider>
    </div>
  )
}


export default App