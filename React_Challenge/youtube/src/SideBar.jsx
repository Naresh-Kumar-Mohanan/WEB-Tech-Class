import React from "react"


const SideBar = (props) => {

    function handleClick() {
        props.setState(props.index);
    }

    return (
        <div>
            <img src={props.element.imgUrl} alt="" onClick={handleClick} />
        </div>
    )
}

export default SideBar