import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion' // Import Framer Motion
import { teamMembers } from '../app/data/team'

const slideInVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Team = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white" id="our-team">
      <div className="my-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center px-4">
          Executive Team
        </h1>
      </div>

      <div className="flex justify-center flex-wrap place-items-center">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
            custom={index % 2 === 0 ? 'left' : 'right'} // Alternate slide-in direction
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when in view
          >
            <div className="flex flex-col rounded-2xl bg-gray-100 text-black dark:text-white hover:bg-gray-800 hover:text-white">
              <a href="#" className="mx-auto">
                <Image
                  className="rounded-t-2xl w-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src={member.image}
                  height={200}
                  width={300}
                  alt={member.name}
                />
              </a>

              <div className="text-center my-6">
                <h1 className="text-xl font-bold mb-1">{member.name}</h1>
                <div className="font-normal mb-3">{member.role}</div>
                <div>
                  <Link
                    href={`/aboutus/team/${member.slug}`}
                    className="bg-gray-400 rounded-3xl py-2 px-4"
                  >
                    Profile
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Team
