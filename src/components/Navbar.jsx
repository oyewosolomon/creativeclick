"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/creativeclick.jpg'
import ThemeToggle from './ThemeToggle'
import {IoIosMoon} from "react-icons/io"
import { MdOutlineLightMode } from "react-icons/md";
import Link from 'next/link'
import { useTheme } from '../ThemeContext.jsx';
import styles from './style.module.scss'
import Sidebar from './Sidebar'
import { AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [isActive, setIsActive] = useState(false);
  return (
   
    <nav className="bg-white text-black border-gray-200 dark:bg-black dark:border-gray-700">
        <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto py-4 px-2 md:px-8">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} priority className="h-8 w-8 rounded-md" alt="Logo" />
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Creativeclick</span>
        </a>
        <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-1 w-8 h-8 z-50 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <div onClick={()=>{setIsActive(!isActive)}} className={styles.button}>
                <svg className={`${styles.burger} ${isActive? styles.burgerActive:""} w-3 h-3`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </div>
            <AnimatePresence mode="wait">
            {isActive && <Sidebar isActive={isActive} setIsActive={setIsActive} />}
            </AnimatePresence>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Link href="/" className="block py-2 px-3 text-white bg-customOrange rounded md:bg-transparent md:text-customOrange  md:dark:text-customOrange dark:bg-customOrange md:dark:bg-transparent" aria-current="page">Home</Link>
                </li>
                <li className="group relative">
                    <Link href="/aboutus" id="dropdownNavbarLink" className="group transition-all flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange  md:w-auto dark:text-white md:dark:hover:text-customOrange dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                        About 
                    </Link>
                </li>
                <li>
                    <Link href="/services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange  dark:text-white md:dark:hover:text-customOrange dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
                </li>
                <li>
                    <Link href="/package" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange  dark:text-white md:dark:hover:text-customOrange dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Package</Link>
                </li>
                <li>
                    <Link href="/contactus" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange  dark:text-white md:dark:hover:text-customOrange dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                </li>               
                <li>
                <button type="button" className="text-white bg-black hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:bg-customOrange font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white dark:text-black dark:hover:bg-customOrange dark:focus:ring-customOrange">Let&apos;s talk</button>
                </li>
                
                <div className="flex items-center place-items-center">
                    {darkMode ? (
                    <MdOutlineLightMode onClick={toggleDarkMode} className="align-middle size-6 cursor-pointer dark:text-white" />
                    ) : (
                    <IoIosMoon onClick={toggleDarkMode} className="align-middle size-6 cursor-pointer dark:text-white" />
                    )}
                </div>
            </ul>
                    
        </div>
        </div>
    </nav>

  )
}

export default Navbar