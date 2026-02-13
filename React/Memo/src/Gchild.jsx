import React, { useContext } from 'react'
import { myContext } from './App';

const Gchild = (props) => {

    let myGift = useContext(myContext)

    console.log(myGift);

    return (
        <div>
            Grand child
        </div>
    )
}

export default Gchild