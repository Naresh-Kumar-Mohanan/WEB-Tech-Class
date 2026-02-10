import React, { useEffect } from 'react'

export default function App() {
    useEffect(() => {
        console.log(`I am from UseEffect`);
    }, [])

    return (
        <div>

        </div>
    )
}
