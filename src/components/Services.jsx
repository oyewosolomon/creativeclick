import React from 'react'
import { motion } from 'framer-motion'
import service1 from '@/assets/services-1.jpg'
import service2 from '@/assets/services-2.jpg'
import service3 from '@/assets/services-3.jpg'
import service4 from '@/assets/services-4.jpg'
import service5 from '@/assets/services-5.jpeg'
import service6 from '@/assets/services-6.jpg'
import Image from 'next/image'

const Services = () => {
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <div className="dark:bg-black dark:text-white py-3">
      <div className='w-full md:w-2/3 mx-auto px-4'>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 px-4 text-center my-5">Our Services</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 place-items-center my-10'>
          {[
            { title: 'Corporate & Brand Identity Video Content', img: service1 },
            { title: 'Documentaries', img: service2 },
            { title: 'Live Streaming', img: service3 },
            { title: 'Product-Focused Videos', img: service4 },
            { title: 'Photography', img: service5 },
            { title: 'Cinematography', img: service6 },
            { title: 'Aerial Photography (Drone Production)', img: service6 },
            { title: 'Films Production', img: service6 },
            { title: 'Real Estate Video Shoot', img: service6 },
            { title: 'Event Coverage', img: service6 },
            { title: 'Commercial Ads', img: service6 },
            { title: 'Wedding Shoot', img: service6 },
            { title: 'Post Production', img: service6 },
            { title: 'Social Media Content', img: service6 },
            { title: 'Interview Videos', img: service6 },
            { title: 'Explainer Videos', img: service6 },
            { title: 'Graphics Design', img: service6 },
            { title: 'Digital Marketing/SEO', img: service6 },
            { title: 'Audio Production', img: service6 },
            { title: 'Publicity and Advertising', img: service6 },
            { title: 'Media Consultancy', img: service6 },
            { title: 'Website design', img: service6 },
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
