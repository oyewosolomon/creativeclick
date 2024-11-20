import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext.jsx';
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

const Sidebar = ({ isActive, setIsActive }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [aboutExpanded, setAboutExpanded] = useState(false);

  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  const toggleAbout = (e) => {
    e.preventDefault();
    setAboutExpanded(!aboutExpanded);
  };

  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50"
      initial="closed"
      animate={isActive ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <button onClick={() => setIsActive(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2 p-4">
            <li>
              <Link href="/" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Home
              </Link>
            </li>
            <li>
              <div className="relative">
                <Link href="/aboutus" className="py-2 px-4 text-gray-700 hover:text-customOrange hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  About
                </Link>
                
              </div>
            </li>
            <li>
              <Link href="/services" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Services
              </Link>
            </li>
            <li>
              <Link href="/package" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Package
              </Link>
            </li>
            <li>
              <Link href="/contactus" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <button onClick={handleLinkClick} className="w-full text-white bg-customOrange hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-customOrange dark:hover:bg-yellow-600 dark:focus:ring-yellow-800">
            Let&apos;s talk
          </button>
          <div className="flex items-center justify-center mt-4">
            {darkMode ? (
              <MdOutlineLightMode onClick={toggleDarkMode} className="text-2xl cursor-pointer dark:text-white" />
            ) : (
              <IoIosMoon onClick={toggleDarkMode} className="text-2xl cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;