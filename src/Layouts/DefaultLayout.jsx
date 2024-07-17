import React from 'react'
import Header from '../Components/Header'
import Footer from "../Components/Footer"
const DefaultLayout = (props) => {
  return (
    <div>
    <Header />
    {props.children}
    <Footer />
    </div>
  )
}

export default DefaultLayout
