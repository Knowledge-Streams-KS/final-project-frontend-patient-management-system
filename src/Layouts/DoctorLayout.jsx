import React from 'react'
import DoctorHeader from '../Components/DoctorHeader'
import Footer from "../Components/Footer"


const DoctorLayout = (props) => {
  return (
    <div>
    <DoctorHeader/>
    {props.children}
    <Footer />
    </div>
  )
}

export default DoctorLayout
