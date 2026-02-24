import React, { useEffect, useState } from 'react'

export default function Home() {
    let [state, setState] = useState(null)

    useEffect(() => {
        async function xyz() {
            let res = await fetch("https://6992c2278f29113acd3ea37b.mockapi.io/details")
            let data = await res.json()
            setState(data);
            console.log(data);

        }
        xyz()
    }, [])

    return (
        <div>
            {state && state.map((e) => {
                return <div key={e.id}>
                    <h3>{e.id}</h3>
                    <h3>{e.name}</h3>
                    <br />
                </div>
            })}
        </div>
    )
}
