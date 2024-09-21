import { motion } from 'framer-motion';
import { Locate, Mail, Phone } from 'lucide-react';
import { MdEmail } from 'react-icons/md';

export default function ContactUs() {
  return (
    <div className="min-h-scren dark:bg-black dark:text-white">
      {/* Header Section with Image */}
      <div className="relative">
        <img
          src="/path-to-your-image.jpg" // Replace with the path to your header image
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
            Get in Touch
          </motion.h1>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="py-12 px-4 grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:px-6 lg:px-8">
           {/* Additional Contact Details */}
            <div className="px-5">
              <h2 className="text-yellow-600 my-5">Get In Touch</h2>
              <h2 className="text-4xl font-bold text-black dark:text-white">Let's Work Together</h2>
              <div className='my-4'>
                <hr className='border-1 border-black/20 dark:border-white mt-10' />
              </div>
              <ul className="mt-4 space-y-4 dark:text-white/80 text-gray-500">
                <li className="flex items-center space-x-4">
                  <Mail/>
                  <div className=''>
                    <p className="text-lg font-medium">Email</p>
                    <p className="">contact@yourdomain.com</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <Phone/>
                   
                  <div>
                    <p className="text-lg font-medium">Phone</p>
                    <p className="">+1 234 567 890</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                 <Locate/>
                  <div>
                    <p className="text-lg font-medium">Address</p>
                    <p className="">123 Photography Lane, Studio City, CA</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full mx-auto shadow-lg rounded-lg p-8">
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    className="mt-1 bg-transparent block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white ">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    className="mt-1 bg-transparent block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white ">
                    Phone
                    </label>
                    <input
                    type="digit"
                    id="phone"
                    className="mt-1 bg-transparent block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">
                    Message
                    </label>
                    <textarea
                    id="message"
                    rows="4"
                    className="mt-1 bg-transparent block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    ></textarea>
                </div>

                <motion.button
                    type="submit"
                    className="w-full px-4 py-2 mb-3 bg-yellow-600 text-white font-medium rounded-md shadow-sm hover:bg-yellow-700 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send Message
                </motion.button>
                </form>

            
            </motion.div>
            </div>
      </div>

      <div className='py-5 h-[200px] flex flex-col'>
        <div>
          <h1 className='text-6xl font-extrabold my-5'>
          Have an idea for a project?
          </h1>
        </div>
        <div>
          <span className='text-4xl font-bold border-b-2 text-yellow-400'>
            Let's talk
          </span>
        </div>
      </div>
    </div>
  );
}
