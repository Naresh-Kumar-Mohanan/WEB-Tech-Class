import React, { useContext } from 'react'
import Gchild from './Gchild'
import { pContext } from './Parent'

export default function Child() {
    let pGift = useContext(pContext)
    return (
        <div>Child
            <Gchild></Gchild>
            <h2>{pContext}</h2>
        </div>
    )
}
