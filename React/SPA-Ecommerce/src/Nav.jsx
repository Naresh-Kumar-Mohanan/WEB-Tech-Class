import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="cart">Cart</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}

export default Nav