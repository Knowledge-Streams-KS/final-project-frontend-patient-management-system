import React from 'react'
import { useNavigate } from 'react-router-dom'

const PatientDashBoard = () => {
    const navigate = useNavigate();
    const handleAppointment = () => {
        navigate('/Appointment');
    }
  return (
    <div>
          <h1 className='text-[40px] font-bold mt-[100px]'>Patient DashBoard</h1>
        <br />
    <div className='bg-teal-500 h-[200px] min-w-[50%] mt-16 flex flex-col justify-center items-center rounded-md '>
      <div className=''>
      
      <h1 className='text-3xl font-bold '>Welcome Back </h1>
      <h2 className='text-2xl font-bold'>We are here to help you</h2>
      </div>
    </div>
      {/* <h2>Kindly Fill the Bio</h2> */}
      {/* patient necessarily fill the bio then it can bhe move to book an appointment */}
      {/* <button type="submit" className='w-[200px] h-[50px] bg-black text-white rounded-md'
       onClick={handleAppointment}>Book An Appointment</button> */}
       <div>

       </div>
    </div>
  )
}

export default PatientDashBoard
