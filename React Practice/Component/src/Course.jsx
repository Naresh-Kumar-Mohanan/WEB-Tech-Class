import React from 'react'
import RLogo from "/image.png"

const course1 = "React Course";

export default function Course() {

    const style = {
        backgroundColor: "green"
    }

    return (
        <div style={style}>
            <img src={RLogo} alt="" />
            <h3>{course1}</h3>
            <p>This is a React Practice Session</p>
        </div>
    )
}
