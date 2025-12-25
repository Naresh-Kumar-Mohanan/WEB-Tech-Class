import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

let login = <div className="container">
    <form action="">
        <h1>Login</h1>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="username" />
        <label htmlFor="">Password</label>
        <input type="text" placeholder="password" />
        <button>Login</button>
    </form>
</div>

// -- Way 1 to create a Element
// let rootDev = document.getElementById("root")
// ReactDOM.createRoot("root");

// -- Way 2 Create a Element
ReactDOM.createRoot(document.getElementById("root")).render(
    // <div className="">
    //     <h2>I am Heding</h2>
    //     <h3>I am From Same Parent</h3>
    //     <input type="text" placeholder="I am Input Tag" /> {/* All the tags must be Closing also not like HTML open tags */}
    //     <label htmlFor=""></label>
    // </div>
    login
);