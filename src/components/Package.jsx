import React from 'react'

import { AnimatedModalDemo } from "@/components/Modal";

const Package = () => {
    return (
        <div className="bg-gray-100 dark:bg-black min-h-screen py-10 "  id='package'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-center mb-12">

              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white pt-10">Pricing Packages</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-white">Choose the best plan for your business needs.</p>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Bronze Package */}
              <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bronze Package</h2>
                <ul className="space-y-3 flex-grow">
                <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Corporate Video: 2 corporate videos</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Photography: 1 session per month</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Drone Services: 1 project per month</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Logo Animation: 1 custom logo animation</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Product Video: 1 product video</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Content Creation</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Content Plan</span></li>
                </ul>
                <div className="mt-6">
                <AnimatedModalDemo/>  
                </div>
              </div>
    
              {/* Silver Package */}
              <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Silver Package</h2>
                <ul className="space-y-3 flex-grow">
                    <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span> Corporate Video: 2 corporate videos</span>
                    </li>
                    <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Photography: 1 session per month</span>
                    </li>
                    <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Drone Services: 2 projects per month</span>
                    </li>
                    <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Logo Animation: 1 custom logo animation</span>
                       </li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Product Video: 2 product videos per month</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Documentary: 1 short documentary</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Motion Graphics: 1 basic project per month</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Commercials: 1 commercial per month</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Content Creation</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Content Plan</span></li>
                </ul>
                <div className="mt-6">
                  <AnimatedModalDemo/>                  
                </div>
              </div>
    
              {/* Gold Package */}
              <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gold Package</h2>
                <ul className="space-y-3 flex-grow">
                    <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Corporate Video: 3 corporate videos</span>
                    </li>
                    <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Photography: 1 session per month</span>
                    </li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Drone Services: 3 projects per month</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Logo Animation: 1 custom logo animation</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Product Video: 3 product videos per month</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Documentary: 2 short documentaries</span></li>
                      <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Commercials: 2 commercials per month</span>
                       </li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Podcast: 2 episodes per month</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Short Film: 2 short films per year</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Live Streaming</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Content Creation</span></li>
                       <li className='flex align-items-middle place-items-center'>
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.2426 14.4142L17.3137 7.34315L18.7279 8.75736L10.2426 17.2426L6 13L7.41421 11.5858L10.2426 14.4142Z" fill="#FF6600"></path> </g></svg>
                       &nbsp;<span>Content Plan</span></li>
                </ul>
                <div className="mt-6">
                <AnimatedModalDemo/>  
                  {/* <button className="w-full bg-customOrange text-white py-2 rounded-lg hover:bg-customOrange transition mt-auto">
                    Choose Gold
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
export default Package