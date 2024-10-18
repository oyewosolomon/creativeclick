import Image from 'next/image'
import React from 'react'
import logo from '@/assets/creativeclick.jpg'
import ThemeToggle from './ThemeToggle'
import {IoIosArrowDown,IoIosMoon} from "react-icons/io"
import { MdOutlineLightMode } from "react-icons/md";
import Link from 'next/link'
import { useTheme } from '../ThemeContext.jsx';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();
  return (
   
    <nav className="bg-white border-gray-200 dark:bg-black dark:border-gray-700">
        <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4 px-8">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} priority className="h-8 w-8 rounded-md" alt="Logo" />
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Creativeclick</span>
        </a>
        <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" className="block py-2 px-3 text-white bg-customOrange rounded md:bg-transparent md:text-customOrange  md:dark:text-customOrange dark:bg-customOrange md:dark:bg-transparent" aria-current="page">Home</a>
                </li>
                <li className="group relative">
                    <Link href="" id="dropdownNavbarLink" className="group transition-all flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange  md:w-auto dark:text-white md:dark:hover:text-customOrange dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                        About 
                    <IoIosArrowDown className="group-hover:rotate-180  transition-all"/>
                    </Link>
            
                    <div id="dropdownNavbar" className="absolute z-10 hidden group-hover:flex group-hover:flex-col font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li aria-labelledby="dropdownNavbarLink">
                                <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown 
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                            <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                    <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Overview</a>
                                    </li>
                                    <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My downloads</a>
                                    </li>
                                    <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Billing</a>
                                    </li>
                                    <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Rewards</a>
                                    </li>
                                </ul>
                            </div>
                            </li>
                            <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange  dark:text-white md:dark:hover:text-customOrange dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
                <li>
                    <a href="#package" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange  dark:text-white md:dark:hover:text-customOrange dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Package</a>
                </li>
                <li>
                    <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange  dark:text-white md:dark:hover:text-customOrange dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>               
                <li>
                <button type="button" className="text-white bg-black hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white dark:text-black dark:hover:bg-customOrange dark:focus:ring-customOrange">Let&apos;s talk</button>
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