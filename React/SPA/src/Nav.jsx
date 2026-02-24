import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='nav'>
      <nav>
        <ul>
            <li><Link to ='home'>Home</Link></li>
            <li><Link to ='users'>Users</Link></li>
            <li><Link to ='login'>Login</Link></li>
            <li><Link to ='signup'>Signup</Link></li>

            
        </ul>
      </nav>
      <main>
        <Outlet></Outlet> 
      </main>
    </div>
  )
}

export default Nav
