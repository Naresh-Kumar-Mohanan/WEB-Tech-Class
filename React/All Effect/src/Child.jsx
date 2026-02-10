import React from 'react'
import { memo } from 'react';

const Child = memo(() => {

    console.log("I am from child");

    return (
        <div>
            Child
        </div>
    )
})

export default Child