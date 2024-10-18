import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <div className="h-screen" id='team'>
        <div className='my-8'>
            <h1 className="text-4xl md:text-5xl font-bold text-black text-center px-4"
            
            >
                Team
            </h1>
            </div>
        <div class="flex justify-center flex-wrap place-items-center">
            
            
            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div class="flex flex-col">
                
                    <a href="#" class="mx-auto">
                        <Image class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        height={200} width={300} 
                            src="/assets/manager.jpg"/>
                    </a>

                    
                    <div class="text-center mt-6">
                    
                        <h1 class="text-gray-900 text-xl font-bold mb-1">
                            Hogan
                        </h1>

                    
                        <div class="text-gray-700 font-light mb-2">
                            Manager
                        </div>

                    
                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                        transition-opacity duration-300">
                        
                            <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                <i class="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                            </a>

                        
                            <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                <i class="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                            </a>

                            
                            <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        
            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div class="flex flex-col">
                
                    <a href="#" class="mx-auto">
                        <Image class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                            src="/assets/ceo.jpg" height={200} width={300} />
                    </a>

                    <div class="text-center mt-6">
                    
                        <h1 class="text-gray-900 text-xl font-bold mb-1">
                            King Hogan
                        </h1>

                    
                        <div class="text-gray-700 font-light mb-2">
                            Founder/CEO
                        </div>

                    
                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                        transition-opacity duration-300">
                        
                            <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                <i class="text-indigo-700 mx-auto mt-2">
                                <Image src="/assets/linkedin.svg" width={30} height={30} />
                                </i>
                            </a>

                        
                            <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                <i class="text-blue-400 mx-auto mt-2">
                                <Image src="/assets/youtube.svg" width={30} height={30} />
                                </i>
                            </a>

                            <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                <i class=" text-orange-400 mx-auto mt-2">
                                    <Image src="/assets/instagram.svg" width={30} height={30} />
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        
            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div class="flex flex-col">
                
                    <a href="#" class="mx-auto">
                        <Image class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                            src="/assets/lawyer.jpg" height={200} width={300} />
                    </a>

                    <div class="text-center mt-6">
                    
                        <h1 class="text-gray-900 text-xl font-bold mb-1">
                            Kenji Milton
                        </h1>

                    
                        <div class="text-gray-700 font-light mb-2">
                            Team Memeber
                        </div>

                    
                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                        transition-opacity duration-300">
                        
                            <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                            </a>

                            <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                            </a>

                        
                            <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team