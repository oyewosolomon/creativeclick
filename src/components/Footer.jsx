import React from 'react'
import logo from '@/assets/creativeclick.jpg'
import Image
 from 'next/image'
const Footer = () => {
  return (
    <div className='mt-5 px-8 py-5'>
        <div>
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} priority className="h-8 w-8 rounded-md" alt="Logo" />
            <span className="self-center text-md font-semibold whitespace-nowrap dark:text-black">Creativeclick</span>
            <span>&copy;2024</span>
        </a>
        </div>
    </div>
  )
}

export default Footer