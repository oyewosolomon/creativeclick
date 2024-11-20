
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import service1 from '@/assets/services-1.jpg'
import service2 from '@/assets/services-2.jpg'
import service3 from '@/assets/services-3.jpg'
import service5 from '@/assets/services-5.jpeg'
import Image from 'next/image'

const Services = () => {
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <div className="dark:bg-black dark:text-white py-3" id='services'>
      <div className='w-full md:w-2/3 mx-auto px-4'>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 px-4 text-center my-5">Our Services</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 place-items-center my-10'>
          {[
            { title: 'Event covers', img: service1 },
            { title: 'Documentaries', img: service2 },
            { title: 'Live Streaming', img: service3 },
            { title: 'Photography', img: service5 },
            { title: 'YouTube Content', img: "/assets/cinema.jpg"  },
            { title: 'Drone Services', img: "/assets/aerial.jpg"},
            { title: 'Films Production', img: "/assets/film.jpeg"  },
            { title: 'Real Estate Content', img: "/assets/drone1.jpg" },
            { title: 'Commercial', img: "/assets/commercial.jpg" },
            { title: 'Website design', img: "/assets/post-production.jpg" },
            { title: 'Podcast', img: "/assets/interview.jpg" },
            { title: 'Live Streaming', img: "/assets/explainer.jpg" },
            { title: 'Music Video', img: "/assets/audio-engineering.jpg" },
            { title: 'Media Consultancy', img: "/assets/consultancy.jpg" },
          
          ].map((service, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden group"
              initial="hidden"
              animate="visible"
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
        </div>
      </div>
    </div>
  )
}

export default Services
