import React, { createContext } from 'react'
import Child from './Child'

export let pContext = createContext();

export default function Parent() {
    let dataa = "Gift From Parent"
    return (
        <div>Parent
            <pContext.Provider value={dataa}>
                <Child></Child>
            </pContext.Provider>

        </div>
    )
}
