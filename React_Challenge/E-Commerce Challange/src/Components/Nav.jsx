import React, { useState } from 'react'
import CartImg from "/icon-cart.svg"
import Avatar from "/image-avatar.png"
import Cart from './Cart'
import "./Nav.css"

export default function Nav() {
    let [cc, setcc] = useState(false)

    function onClick() {
        setcc(!cc)
    }


    return (
        <div className='navBar'>
            <h1>Sneakers</h1>
            <ul>
                <li>Collection</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='details'>
                <img id='cart' src={CartImg} height={25} alt="" onClick={onClick} />
                <div className='cartBox'>
                    {cc ? <Cart /> : null}
                </div>
            </div>
            <img id='profile' src={Avatar} height={45} alt="" />
        </div>
    )
}
