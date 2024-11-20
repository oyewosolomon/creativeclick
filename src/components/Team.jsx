import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { teamMembers } from '../app/data/team'

const Team = () => {
  return (
    <div className="" id='our-team'>
        <div className='my-8'>
            <h1 className="text-4xl md:text-5xl font-bold text-black text-center px-4">
            Executive Team
            </h1>
        </div>

        <div class="flex justify-center flex-wrap place-items-center">
            {
                teamMembers.map((member)=>(
                    <div key={member.id} class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div class="flex flex-col rounded-2xl bg-gray-100 text-black dark:text-white hover:bg-gray-800 hover:text-white">
                        
                            <a href="#" class="mx-auto">
                                <Image class="rounded-t-2xl w-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src={member.image} height={200} width={300} alt={member.name} />
                            </a>
        
                            <div class="text-center  my-6">
                            
                                <h1 class=" text-xl font-bold mb-1">
                                    {member.name}
                                </h1>
        
                            
                                <div class="font-normal mb-3">
                                    {member.role}
                                </div>
                                <div>
                                <Link href={`/aboutus/team/${member.slug}`}  className='bg-gray-400 rounded-3xl py-2 px-4'>
                                    Profile
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        
        </div>
    </div>
  )
}

export default Team