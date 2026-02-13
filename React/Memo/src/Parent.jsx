import React from 'react'
import Child from './Child'

const Parent = (props) => {
    console.log(props.gift);

    return (
        <div>
            Parent
            <Child></Child>
        </div>
    )
}

export default Parent