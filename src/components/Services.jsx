"use client"

import React from 'react'
import { motion } from 'framer-motion'
import service1 from '../assets/services-1.jpg'
import service2 from '../assets/services-2.jpg'
import service3 from '../assets/services-3.jpg'
import service5 from '../assets/services-5.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      } 
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Delay between each child animation
      }
    }
  }

  const titleAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="dark:bg-black dark:text-white py-3" id='services'>
      <div className='w-full md:w-2/3 mx-auto px-4'>
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 px-4 text-center my-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={titleAnimation}
        >
          Our Services
        </motion.h2>

        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 place-items-center my-10'
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { title: 'Event covers', img: service1 },
            { title: 'Documentaries', img: service2 },
            { title: 'Live Streaming', img: service3 },
            { title: 'Photography', img: service5 },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden group"
              variants={fadeInScale}
            >
              <div className="absolute inset-0 z-10 flex justify-center items-center text-center font-bold text-xl md:text-2xl cursor-pointer bg-black/60 text-white rounded-lg">
                {service.title}
              </div>
              <Image
                src={service.img}
                alt={service.title}
                layout="fill"
                className='object-cover transition-opacity duration-300 group-hover:opacity-50'
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className='flex justify-center items-center text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/services" className="text-white bg-black hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:bg-customOrange font-medium rounded-lg text-sm px-6 py-2 text-center dark:bg-white dark:text-black dark:hover:bg-customOrange dark:focus:ring-customOrange">
            More Services
          </Link>   
        </motion.div>
      </div>
    </div>
  )
}

export default Services