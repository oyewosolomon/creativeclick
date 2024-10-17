"use client"
import React, { useEffect, useRef, Suspense } from 'react'
import Image from "next/image";
import drone from '@/assets/drone1.jpg'
import { useAnimation, useScroll } from "framer-motion";
import { Modal } from "@/components/ui/AnimatedModal";
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from '@react-three/drei';
import { useMotionValue, useSpring } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import service1 from '@/assets/services-1.jpg'
import service2 from '@/assets/services-2.jpg'
import service3 from '@/assets/services-3.jpg'
import service4 from '@/assets/services-4.jpg'
import service5 from '@/assets/services-5.jpeg'
import service6 from '@/assets/services-6.jpg'

import styles from "./style.module.scss"

const Hero = () => {
    const controls = useAnimation();
    const { scrollY } = useScroll();
    const canvasRef = useRef(null); 
    useEffect(() => {
        const updateScale = () => {
            const newScale = 1 + scrollY.get() / 1000;
            const newY = scrollY.get() / 2;
            controls.start({ scale: newScale, y: newY });
        };

        const unsubscribe = scrollY.onChange(updateScale);
        return () => unsubscribe();
    }, [controls, scrollY]);

    return (
        <div className="text-black bg-white dark:bg-black dark:text-white min-h-screen p-8">
        <section className="bg-customPurple/80 text-white py-10 px-4 rounded-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold leading-tight mb-4">Discover <br />Creative Vision</h2>
              <p className="text-xl mb-4">
                We are experienced and knowledgeable professionals who are experts in all aspects of digital and creative services. We are dedicated to helping businesses enhance their visibility and effectively engage with their target audience through innovative multimedia services.
              </p>
              <button className="bg-white text-black font-bold py-3 px-6 rounded hover:bg-customOrange hover:text-white">Let&apos;s talk</button>
            </div>
      
            <div ref={canvasRef} className={styles.main}>
              <Canvas>
                <OrbitControls enablePan={false} enableZoom={false}/>
                <ambientLight intensity={2} />
                <directionalLight position={[2,1,1]}/>
                <Cube canvasRef={canvasRef} />
              </Canvas>
            </div>
          </div>
        </section>
        <Modal />
      </div>
      
    )
}

function  Cube({ canvasRef }) {
    const mesh = useRef(null);
    const options = {
        damping:20
    }
    const mouse = {
      x:useSpring(useMotionValue(0), options),
      y:useSpring(useMotionValue(0), options)
    }
    const manageMouseMove = (e)=>{
        const rect = canvasRef.current.getBoundingClientRect(); 
        const { clientX, clientY } = e;

        // Only calculate if the mouse is inside the Canvas area
        if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
            const x = ((clientX - rect.left) / rect.width) * 2 - 1;
            const y = ((clientY - rect.top) / rect.height) * 2 - 1;
            mouse.x.set(x);
            mouse.y.set(y);
        }
    }
    useEffect(()=>{
       const canvasElement = canvasRef.current;
      if (canvasElement) {
          canvasElement.addEventListener("mousemove", manageMouseMove);
      }
      return () => {
          if (canvasElement) {
              canvasElement.removeEventListener("mousemove", manageMouseMove);
          }
      };
    })
    // useFrame((state, delta) => {
    //     mesh.current.rotation.x += delta * 0.25
    //     mesh.current.rotation.y += delta * 0.25
    //     mesh.current.rotation.z += delta * 0.25
    // })

    const texture_1 = useLoader(TextureLoader, service1.src)
    const texture_2 = useLoader(TextureLoader, service2.src)
    const texture_3 = useLoader(TextureLoader, service3.src)
    const texture_4 = useLoader(TextureLoader, service4.src)
    const texture_5 = useLoader(TextureLoader, service5.src)
    const texture_6 = useLoader(TextureLoader, service6.src)

    return (
        <motion.mesh ref={mesh} rotateX={mouse.y} rotateY={mouse.x}>
            <boxGeometry args={[3.5, 3.5, 3.5]} />
            <meshStandardMaterial map={texture_1} attach="material-0" />
            <meshStandardMaterial map={texture_2} attach="material-1" />
            <meshStandardMaterial map={texture_3} attach="material-2" />
            <meshStandardMaterial map={texture_4} attach="material-3" />
            <meshStandardMaterial map={texture_5} attach="material-4" />
            <meshStandardMaterial map={texture_6} attach="material-5" />
        </motion.mesh>
    )
}

export default Hero