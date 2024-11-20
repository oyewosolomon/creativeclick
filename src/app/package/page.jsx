import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Package from '../../components/Package'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Package />
        <Footer/>
    </div>
  )
}

export default page