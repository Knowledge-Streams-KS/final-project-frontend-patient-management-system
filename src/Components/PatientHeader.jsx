import React from 'react'
import { NavLink } from 'react-router-dom'
const PatientHeader = () => {
  return (
 
       <header className='flex justify-between bg-black text-white top-0 w-full left-0 fixed  z-50 p-4'>
           <h1 className='text-2xl'>Patient Mangement System</h1>
        <nav className='flex justify-end'>
            <ul className='flex space-x-7 p-3  '>
                <li><NavLink to= "/PatientDashBoard">Home</NavLink></li>
                {/* <li><NavLink to="/PatientDashBoard">PatientDashBoard</NavLink></li> */}
                <li><NavLink to="/Appointment">Appointment</NavLink></li>
              
             
                <li><NavLink to="/FAQ">FAQ</NavLink></li>
                {/* medical Record */}
                <li><NavLink to="/MedicalRecord">MedicalRecord</NavLink></li>
                <li><NavLink to="/SignOutPatient">SignOut As Patient</NavLink></li>
               
            </ul>
        </nav>
       </header>
      )
    }



export default PatientHeader