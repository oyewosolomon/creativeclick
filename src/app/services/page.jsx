import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import React from 'react'
import Services from './components/Services'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default page