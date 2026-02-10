import React, { useEffect, useInsertionEffect, useLayoutEffect, useState } from 'react'
import Child from './Child'
const App = () => {

    let [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    // useEffect(()=>{
    //   console.log("I am from useEffect");

    // },[])

    // useLayoutEffect(()=>{
    //   console.log("I am from useLayoutEffect"); 

    // },[])

    // useInsertionEffect(()=>{
    //   console.log("I am from useInsertionEffect");

    // },[])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Add</button>
            <Child></Child>
        </div>
    )
}

export default App