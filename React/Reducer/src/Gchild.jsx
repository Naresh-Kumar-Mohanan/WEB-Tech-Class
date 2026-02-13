import React, { useContext } from 'react'
import { myContext } from './App'

export default function Gchild() {
    let myGift = useContext(myContext)

    return (
        <div>Gchild
            <h1>{myGift}</h1>
        </div>
    )
}
