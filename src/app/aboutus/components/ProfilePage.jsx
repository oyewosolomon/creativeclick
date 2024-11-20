import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Linkedin, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProfileSection = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h3>
    <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
      {children}
    </div>
  </div>
);

const ProfilePage = ({ member }) => {
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
        {/* Changed to flex-col for mobile-first, then row on md screens */}
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-14">
          {/* Image Section - Now appears first on mobile */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
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
                  <div className="font-normal mb-3">
                    {member.role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Appears second on mobile */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-3xl font-bold mb-4">
              {member.name}
            </h1>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;