"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion
import { ArrowLeft, Mail, Linkedin, Twitter } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const ProfilePage = ({ member }) => {
  // Animation variants for text and image
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideInVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <Navbar />
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/aboutus/team" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Team
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-x-hidden my-12">
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-14">
          {/* Image Section with Slide-in Animation */}
          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2"
            variants={slideInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full mb-6 px-6 sm:px-6 lg:px-4">
              <div className="flex flex-col rounded-2xl bg-gray-100 hover:bg-gray-800 hover:text-white">
                <a href="#" className="mx-auto">
                  <Image
                    className="rounded-t-2xl w-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                    src={member.image}
                    height={200}
                    width={300}
                    alt={member.name}
                  />
                </a>
                <div className="text-center my-6">
                  <div className="font-normal mb-3">{member.role}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Section with Fade-in Animation */}
          <motion.div
            className="w-full md:w-1/2 order-2 md:order-1"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-3xl font-bold mb-4">{member.name}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: member.fullBio }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            />
            <div className="flex space-x-4 mt-10">
              <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Mail className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
