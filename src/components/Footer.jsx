import React from 'react'
import logo from '@/assets/creativeclick.jpg'
import Image
 from 'next/image'
const Footer = () => {
  return (
    <div className='mt-7 px-8 py-5'>
        <div className='flex flex-row items-center space-x-3 '>
          <div>
            <a href="#" className="rtl:space-x-reverse">
                <Image src={logo} priority className="h-8 w-8 rounded-md" alt="Logo" />               
            </a>
          </div>
          <div> 
            <div>
            <span className="self-center text-md font-semibold whitespace-nowrap dark:text-black">Creativeclick</span>
            </div>
            <div className='italic text-[8px] -mt-1'>...Vision to visuals</div>
            
          </div>
          <div><span>&copy;2024</span></div>
        </div>
    </div>
  )
}

export default Footer