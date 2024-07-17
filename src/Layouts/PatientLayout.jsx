import React from 'react'
import PatientHeader from '../Components/PatientHeader'
import Footer from '../Components/Footer'

const PatientLayout = (props) => {
  return (
    <div>
    <PatientHeader />
    {props.children}
    <Footer />
    </div>
  )
}

export default PatientLayout
