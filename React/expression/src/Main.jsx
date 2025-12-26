import React, { Fragment } from "react";
import ReactDOM, { createRoot } from "react-dom/client"

let a = 10;
let b = 20

createRoot(document.getElementById("root")).render(
    // <div>
    //     <React.Fragment>
    //         <h1>I am React Fragment</h1>
    //     </React.Fragment>

    //     <Fragment>
    //         <h1>I am Fragment</h1>
    //     </Fragment>

    //     <>
    //         <h1>I am Empty Tag</h1>
    //     </>
    // </div>
    <>
        <h3>Value A : {a}</h3>
        <h3>Value B : {b}</h3>

        <h4>The Addition of {a} and {b} is {a + b}</h4>
        <h4>The Subtraction of {a} and {b} is {a - b}</h4>
        <h4>The Multiplication of {a} and {b} is {a * b}</h4>
        <h4>The Divition of {a} and {b} is {a / b}</h4>
    </>
)
