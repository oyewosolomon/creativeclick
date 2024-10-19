import React from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/AnimatedModal";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    (<div className="">
      <Modal>
        <ModalTrigger
          className="">
          <span
            className="text-customOrange group-hover/modal-btn:translate-x-60 text-center transition duration-500">
            Let&apos;s talk
          </span>
          <span
            className="-translate-x-60 text-white group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
           Let&apos;s talk
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4
              className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Send us a message
            </h4>
           
            <div
              className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <IoMdPhonePortrait/>
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                +2349160002719
                </span>
              </div>
              
              <div className="flex items-center justify-center">
                <MdEmail/>
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  hello@creativeclickltd.com
                </span>
              </div>
            </div>
              <div className="w-[100%] text-left">
                <div className="w-[100%]">
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
                
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                    <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div class="">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                </div> 
                <div class="">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                    <textarea id="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required> </textarea>
                </div> 
               
              </div>
            
          </ModalContent>
          <ModalFooter className="gap-4">
            <button
              className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button
              className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Send
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
      
    </div>)
  )
}

export default Contact