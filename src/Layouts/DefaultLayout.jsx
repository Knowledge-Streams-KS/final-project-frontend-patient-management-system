import React from 'react'
import Header from '../Components/Header'

const DefaultLayout = (props) => {
  return (
    <div>
    <Header />
    {props.children}
    {/* <Footer /> */}
    </div>
  )
}

export default DefaultLayout
