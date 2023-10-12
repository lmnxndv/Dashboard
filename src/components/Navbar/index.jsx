import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><NavLink to="/">Dallas Office</NavLink></li>
            <li><NavLink to="/coppel">Coppel Office</NavLink></li>
            <li><NavLink to="/losangeles">Los Angeles Office</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar