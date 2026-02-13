import React, { memo } from 'react'
import Gchild from './Gchild';

const Child = memo((props) => {

    // console.log("I am from Child");

    return (
        <div>
            {/* Child{props.count} */}

            Child
            <Gchild></Gchild>
        </div>
    )
})

export default Child