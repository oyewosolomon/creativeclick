"use client"

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Team from '../../components/Team'
import React from 'react'
import Image from 'next/image'
import Aboutus from './components/Aboutus'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className="relative">
        <Image
          src="/assets/aerial.jpg"
          width={1000}
          height={1000}
          alt="Contact Us Header"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white text-center px-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
        </div>
      </div>
      <Aboutus/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default page