import React from 'react'

export default function SideBar(props) {

    function handleClick() {
        props.setState(props.index);
    }

    return (
        <div>
            <img src={props.element.imgUrl} onClick={handleClick} alt="" />
        </div>
    )
}
