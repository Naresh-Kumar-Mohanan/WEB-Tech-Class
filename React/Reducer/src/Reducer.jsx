import React, { useReducer } from 'react'

function abc(state, action) {
    console.log(state);
    console.log(action);

    if (action == "increase") {
        return { ...state, count: state.count + 1 }
    }

    if (action == "decrease") {
        return { ...state, count: state.count - 1 }
    }

    if (action == "reset") {
        return { count: 0 }
    }
}

const Reducer = () => {
    let [state, setState] = useReducer(abc, { count: 0 })

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                setState("increase")

            }}>Increase</button>

            <button onClick={() => {
                setState("decrease")
            }}>Decrease</button>

            <button onClick={() => {
                setState("reset")
            }}>Reset</button>
        </div>
    )
}

export default Reducer