import React, { useState } from 'react'

export default function Signup() {

    let [state, setState] = useState({
        id: "",
        name: ""
    })

    function handleInput(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        let res = await fetch("https://6992c2278f29113acd3ea37b.mockapi.io/details", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        })
        console.log(res);
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter ID' name='id' onInput={handleInput} value={state.id} />
                <input type="text" placeholder='Enter Name' name='name' onInput={handleInput} value={state.name} />
                <button disabled={state.id && state.name ? false : true}>Add user</button>
            </form>
        </>
    )

}