"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Services = () => {
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  const services = [
    {
      title: 'Event Covers',
      description: 'Turn your special moments into lasting memories with our Event Covers service. Whether it\'s a wedding, corporate event, birthday, or cultural celebration, we specialize in capturing the essence of your event with professional photography and videography. From candid emotional shots to detailed highlights of the decor, our team ensures no moment goes unnoticed.\n\nWhat to Expect: We begin with a pre-event consultation to understand your vision and specific needs. On the day, our skilled team works discreetly to capture every significant moment, delivering high-quality edited images and videos within an agreed timeframe. Optional add-ons include highlight reels, photo books, and same-day edits.',
      img: '/assets/services-1.jpg',
    },
    {
      title: 'Documentaries',
      description: 'We bring stories to life with our Documentary Production services, tailored to capture compelling narratives. Whether you’re documenting personal journeys, cultural traditions, or corporate milestones, we combine artistic visuals and powerful storytelling to create documentaries that engage and inform your audience.\n\nWhat to Expect: Clients can expect an end-to-end service, starting with a consultation to define the narrative and scope. We provide script assistance, filming, and post-production, ensuring a seamless process. The final product is a polished documentary ready for broadcast or private sharing.',
      img: '/assets/services-2.jpg',
    },
    {
      title: 'Live Streaming',
      description: 'Our Live Streaming service connects you with audiences anywhere in the world in real time. Ideal for conferences, weddings, concerts, or product launches, we ensure a smooth, high-quality streaming experience across multiple platforms.\n\nWhat to Expect: We set up professional equipment and provide technical support throughout the event. Clients receive a consultation to choose the streaming platforms and formats that best suit their needs, along with the option for recorded streams for future use.',
      img: '/assets/services-3.jpg',
    },
    {
      title: 'Photography',
      description: 'Capture moments with precision and creativity through our professional photography services. From portraits to events and promotional shoots, we bring artistic vision and technical expertise to create stunning photographs tailored to your needs.\n\nWhat to Expect: Our services include a pre-shoot discussion, on-location or studio setups, and expert editing to deliver high-resolution images. Clients can also request customized photo albums or framed prints as keepsakes.',
      img: '/assets/services-5.jpeg',
    },
    {
      title: 'YouTube Content',
      description: 'We help you elevate your YouTube channel with content that stands out. From ideation to production, our team creates engaging, high-quality videos that align with your brand and captivate your audience.\n\nWhat to Expect: Clients receive concept development, scriptwriting, shooting, and editing services. We also offer assistance with channel branding and optimizing videos for YouTube\'s algorithm to increase visibility and engagement.',
      img: "/assets/film.jpeg",
    },
    {
      title: 'Drone Services',
      description: 'Experience breathtaking perspectives with our Drone Services. Perfect for real estate, events, or promotional videos, we capture stunning aerial footage to add a dynamic edge to your projects.\n\nWhat to Expect: Our licensed drone operators deliver cinematic-quality footage. The service includes pre-flight planning, on-site filming, and editing, ensuring compliance with local regulations for a hassle-free experience.',
      img: "/assets/aerial.jpg",
    },
    {
      title: 'Films Production',
      description: 'Whether it\'s a short film, feature-length project, or branded content, our Film Production service delivers cinematic quality from start to finish. We handle everything from pre-production to post-production to bring your vision to life.\n\nWhat to Expect: Clients can expect scriptwriting assistance, casting support, professional filming, and meticulous editing. Additional options include color grading, sound design, and distribution support to ensure your film achieves its goals.',
      img: "/assets/cinema.jpg",
    },
    {
      title: 'Real Estate Content',
      description: 'Showcase properties in their best light with our Real Estate Content service. From professional photography to video tours, we provide visuals that attract buyers and elevate your property listings.\n\nWhat to Expect: Our team offers a range of services, including interior and exterior shoots, drone footage, and virtual tours. Clients can also opt for quick turnaround times to meet tight marketing deadlines.',
      img: "/assets/drone1.jpg",
    },
    {
      title: 'Commercial',
      description: 'Take your brand to the next level with creative and impactful commercials. Our team produces high-quality advertisements tailored to your target audience and marketing goals.\n\nWhat to Expect: From brainstorming concepts to delivering polished commercials, we provide a full-service solution. Clients can choose from various formats, including TV ads, social media campaigns, and corporate videos.',
      img: "/assets/commercial.jpg",
    },
    {
      title: 'Website Design',
      description: 'Stand out online with our Website Design service. We create user-friendly, visually appealing websites that reflect your brand and engage visitors.\n\nWhat to Expect: Our service includes design consultations, responsive development, and SEO optimization. Clients receive ongoing support to ensure their website remains functional and up-to-date.',
      img: "/assets/post-production.jpg",
    },
    {
      title: 'Podcast',
      description: 'Bring your voice to the world with our Podcast Production service. From ideation to post-production, we provide everything you need to launch a professional podcast.\n\nWhat to Expect: Clients receive recording studio access, editing services, and publishing support. Additional options include promotional strategies to grow your audience and analytics to track performance.',
      img: "/assets/interview.jpg",
    },
    {
      title: 'Music Video',
      description: 'Transform your music into visual art with our Music Video Production service. We create cinematic, engaging videos that resonate with your audience and enhance your artistry.\n\nWhat to Expect: Our team collaborates with clients on concept development, location scouting, and shooting. The service includes professional editing, visual effects, and color grading to deliver a polished final product.',
      img: "/assets/audio-engineering.jpg",
    },
    {
      title: 'Media Consultancy',
      description: 'Navigate the media landscape with confidence through our Media Consultancy service. We offer expert advice and strategic planning to help you achieve your creative and business goals.\n\nWhat to Expect: Clients receive personalized consultations, actionable strategies, and ongoing support. Whether you\'re launching a project or optimizing an existing one, we provide the tools and insights for success.',
      img: "/assets/consultancy.jpg",
    },
  ];
  

  return (
    <div className="dark:bg-black dark:text-white py-3" id='services'>
      <div className='w-full md:w-2/3 mx-auto px-4'>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 px-4 text-center my-5">Our Services</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 place-items-center my-10 '>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden group"
              initial="hidden"
              animate="visible"
              variants={fadeInScale}
            >
              {/* Image */}
              <Image
                src={service.img}
                alt={service.title}
                layout="fill"
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
              {/* Title */}
              <div className="absolute inset-0 z-10 flex justify-center items-center text-center font-bold text-xl md:text-2xl cursor-pointer bg-black/50 text-white">
                {service.title}
              </div>
              {/* Description on Hover */}
              <div className="absolute inset-0 z-20 hidden group-hover:flex flex-col overflow-y-auto md:overflow-y-hidden justify-center items-center text-center bg-black/70 text-white px-4 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2 pt-6 ">{service.title}</h3>
                <p className="text-sm md:text-base pb-3">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
