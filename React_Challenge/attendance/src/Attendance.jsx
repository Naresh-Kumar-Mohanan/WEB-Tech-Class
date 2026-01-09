import { useState } from "react"
import "./Attendance.css"

export default function Attendance() {
    let [state, setState] = useState(0)
    let [resState, resSetState] = useState(0)


    function increaseCount() {
        setState(state + 1);
    }

    function result() {
        resSetState(state)
        setState(0)
    }

    return <div className="outer">
        <div className="atns">
            <h1>{state}</h1>
            <div className="btns">
                <button onClick={increaseCount}>Add</button>
                <button onClick={result}>Submit</button>
            </div>
            <h2>Previous Result : {resState}</h2>
        </div>
    </div>
}