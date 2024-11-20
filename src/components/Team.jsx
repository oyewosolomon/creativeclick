import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div className="" id='our-team'>
        <div className='my-8'>
            <h1 className="text-4xl md:text-5xl font-bold text-black text-center px-4">
            Executive Team
            </h1>
        </div>
        <div class="flex justify-center flex-wrap place-items-center">
            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div class="flex flex-col rounded-2xl bg-gray-100 hover:bg-gray-800 hover:text-white">
                
                    <a href="#" class="mx-auto">
                        <Image class="rounded-t-2xl w-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                            src="/assets/hogan.JPG" height={200} width={300} alt='CEO' />
                    </a>

                    <div class="text-center my-6">
                    
                        <h1 class=" text-xl font-bold mb-1">
                            King Hogan
                        </h1>

                    
                        <div class="font-normal mb-1">
                            Founder/CEO
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div class="flex flex-col rounded-2xl bg-gray-100 hover:bg-gray-800 hover:text-white">
                
                    <a href="#" class="mx-auto">
                        <Image class=" rounded-t-2xl drop-shadow-md w-full hover:drop-shadow-xl transition-all duration-200 delay-100"
                        height={200} width={300} 
                            src="/assets/manager.jpg" alt='Manager'/>
                    </a>

                    
                    <div class="text-center my-6">
                    
                        <h1 class="text-xl font-bold mb-1">
                        Ojochemi EYO-Inyang 
                        </h1>

                    
                        <div class="font-normal mb-2">
                        COO/ Director
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div class="flex flex-col bg-gray-100 rounded-2xl  hover:bg-gray-800 hover:text-white">
                
                    <div class="mx-auto">
                        <Image class=" w-full rounded-t-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                            src="/assets/barr-1.jpg" height={100} width={300} objectFit='contain' alt='lawyer' />
                    </div>

                    <div class="text-center my-6">
                    
                        <h1 class="text-xl font-bold mb-1">
                        Barrister Chioma Esuabom
                        </h1>

                        <div class="font-normal mb-2">
                        Legal officer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team