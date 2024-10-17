import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image'
import pwangroup from '@/assets/pwangroup.png';
import americanBlend from '@/assets/americanBlendEstates.jpg';
import anchorHeight from '@/assets/anchorHeights.jpg';
import flap from '@/assets/flap.jpg';
import iconProperties from '@/assets/iconProperties.jpg';
import landsmith from '@/assets/landsmith.jpg';
import nukcreationz from '@/assets/nukreationz.png'

const brands = [
  { name: 'PWAN GROUP', logo: pwangroup },
  { name: 'americanBlend', logo: americanBlend },
  { name: 'anchorHeight', logo: anchorHeight },
  { name: 'flap', logo: flap },
  { name: 'iconProperties', logo: iconProperties },
  { name: 'landsmith', logo: landsmith },
  { name: 'nukreationz', logo: nukcreationz },
];

const InfiniteBrandScroll = () => {
  const controls = useAnimationControls();

  const startScrolling = () => {
    controls.start({
      x: -100 * brands.length,
      transition: {
        duration: 10,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  };

  const handleMouseEnter = () => {
    controls.stop(); // Stop the scroll animation
  };

  const handleMouseLeave = () => {
    startScrolling(); // Restart the animation
  };

  useEffect(() => {
    startScrolling(); // Start the scrolling animation when component mounts
  }, [startScrolling]);

  return (
    
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Brands That Trust Us</h2>
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex"
          animate={controls}
          initial={{ x: 0 }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex flex-col items-center mx-6">
            <div className='w-[200px] h-[165px] flex items-center justify-center rounded-md bg-white p-4 shadow-lg mb-4'>
              <Image 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                layout="intrinsic" 
                width={200} 
                height={155} 
                className="object-contain" // Ensures the image scales within the div
              />
            </div>
            <span className="text-lg font-semibold text-gray-800">{brand.name}</span>
          </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteBrandScroll;