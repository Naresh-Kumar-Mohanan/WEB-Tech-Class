import { useState } from "react"
import "./Theme.css"

const Theme = () => {

    let [color, setColor] = useState("light")


    function handleClick() {

        if (color == "light") {
            setColor("dark")
        } else {
            setColor("light")
        }
    }

    return <div className={`cont ${color}`}>

        <div>
            <h1>{color}</h1>
            <button onClick={handleClick}>Change Theme</button>
        </div>
    </div >

}
export default Theme