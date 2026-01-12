import { useState } from "react"
import plus from "/icon-plus.svg"
import minus from "/icon-minus.svg"


const Quest1 = () => {

    let [first, setFirst] = useState("hide")

    return (
        <div className="quest">
            <div> <h3>What is Frontend Mentor, and how will it help me?</h3>
                <img src={first == "hide" ? plus : minus} alt="" />
            </div>
            <p>Frontend Mentor offers realistic coding challenges to help developers improve their
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
                all levels and ideal for portfolio building.</p>
        </div>
    )
}

export default Quest1