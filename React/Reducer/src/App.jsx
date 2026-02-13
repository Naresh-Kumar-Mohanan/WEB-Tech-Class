import React, { createContext, useReducer, useState } from 'react'
import Parent from './Parent';
import Api from './Api';
import Reducer from './Reducer';
import Reducer2 from './Reducer2';

export let myContext = createContext()

export default function App() {
    let data = "gift from app";

    let [count, setcount] = useState(0)

    function handleIncrease() {
        setcount(count + 1)
    }

    function handleDecrease() {
        setcount(count - 1)
    }

    return (
        <div>App
            {/* <myContext.Provider value={data}>
                <Parent></Parent>
            </myContext.Provider> */}

            {/* <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button> */}

            {/* <Api></Api> */}

            {/* <Reducer></Reducer> */}

            <Reducer2></Reducer2>


        </div>
    )
}
