import React, { memo, useMemo, useState, useCallback, createContext } from 'react'
import Child from './Child'
import Parent from './Parent'

export let myContext = createContext()

const App = () => {

  let gift = "I am Gift"

  // let[count,setCount]=useState(0)
  // console.log("I am from App");

  // let add = useCallback (function (a,b){
  //   console.log("I am from Add");

  //   return a+b
  // },[])

  //   let addResult= useMemo(()=>{
  //     return add(5,4)
  //   },[])


  // function handleClick(){
  //   setCount(count+1)
  // }

  // let handleClick= useCallback(function(){
  //   setCount(count+1)
  // },[])

  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={handleClick}>Add</button> */}
      {/* <Child count={count}></Child> */}
      App
      <myContext.Provider value={gift}>
        <Parent></Parent>
      </myContext.Provider>

    </div>

  )
}

export default App