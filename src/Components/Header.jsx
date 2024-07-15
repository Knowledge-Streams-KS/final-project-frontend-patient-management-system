import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <header className='flex justify-between bg-black text-white top-0 w-full left-0 fixed  z-50 p-4'>
    <a href="">Hi</a>
    <nav className='flex justify-end'>
        <ul className='flex space-x-7 p-3  '>
            <li><NavLink to= "/">Home</NavLink></li>
            <li><NavLink to="/Appointment">Appointment</NavLink></li>
            {/* <li><NavLink to="/Departments">Departments</NavLink></li> */}
            <li><NavLink to="/Doctors">Doctors</NavLink></li>
            {/* <li><NavLink to="/FAQ">FAQ</NavLink></li> */}
            <li><NavLink to="/SignUp">SignUp</NavLink></li>
        </ul>
    </nav>
   </header>
  )
}

export default Header
