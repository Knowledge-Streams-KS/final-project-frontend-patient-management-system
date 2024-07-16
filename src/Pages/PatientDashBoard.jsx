import React from 'react'
import { useNavigate } from 'react-router-dom'

const PatientDashBoard = () => {
    const navigate = useNavigate();
    const handleAppointment = () => {
        navigate('/Appointment');
    }
  return (
    <div>
      PatientDashboard
      <button type="submit" className='w-[200px] h-[50px] bg-black text-white rounded-md' onClick={handleAppointment}>Book An Appointment</button>
    </div>
  )
}

export default PatientDashBoard
