import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

let navbar = <div className="outer">
    <div className="layer">
        <ol>
            <li>Home</li>
            <li>Profile</li>
            <li>About</li>
        </ol>
    </div>
</div>
ReactDOM.createRoot(document.getElementById("root")).render(
    navbar
)