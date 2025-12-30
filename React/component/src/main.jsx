import React from "react";
import { createRoot } from "react-dom/client";

import { NavBar } from "./nav";
import { C } from "./nav";
import NavBar2 from "./NavByClass";

function name(a, b) {
    return a + b;
}

// Component Creation
function FirstCompo() {
    return <div>
        <h2>I am FirstComponent</h2>
    </div>
}

function SecondComponent() {
    return <div>
        <h2>I am SecondComponent</h2>
    </div>
}


createRoot(document.getElementById("root")).render(
    <div>
        <C></C>
        {name("Naresh", " Kumar")}
        <FirstCompo></FirstCompo>
        <SecondComponent></SecondComponent>
        <NavBar></NavBar>
        <NavBar2></NavBar2>
    </div>
);