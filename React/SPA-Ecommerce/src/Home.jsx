import React from 'react'
import { useContext } from 'react'

const Home = () => {
    let appState = useContext(myContext)
    console.log(appState);


    return (
        <div>
            Home
        </div>
    )
}

export default Home