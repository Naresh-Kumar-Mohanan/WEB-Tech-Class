import React, { act, useReducer } from 'react'

function reducer(state, action) {
    switch (action) {

        case "inc":
            return { count: state.count + 1 }

        case "dec":
            return { count: state.count - 1 }

        case "res":
            return { count: 0 }
    }

}

const Reducer2 = () => {

    let [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div>
            <h1>{state.count}</h1>

            <button onClick={() => {
                dispatch("inc")
            }}>Increase</button>

            <button onClick={() => {
                dispatch("dec")
            }}>Decrease</button>

            <button onClick={() => {
                dispatch("res")
            }}>Reset</button>
        </div>
    )
}

export default Reducer2