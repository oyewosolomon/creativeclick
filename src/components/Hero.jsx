"use client"
import React, { useEffect, useRef, Suspense } from 'react'
import { motion } from "framer-motion";
import { useAnimation, useScroll } from "framer-motion";
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from '@react-three/drei';
import { useMotionValue, useSpring } from 'framer-motion';
import { motion as motion3d } from 'framer-motion-3d';
import styles from "./style.module.scss"
import Contact from './Contact';
import { Modal } from "../components/ui/AnimatedModal";

import service1 from '../assets/services-1.jpg'
import service2 from '../assets/services-2.jpg'
import service3 from '../assets/services-3.jpg'
import service4 from '../assets/services-4.jpg'
import service5 from '../assets/services-5.jpeg'
import service6 from '../assets/services-6.jpg'

const Hero = () => {
    const controls = useAnimation();
    const { scrollY } = useScroll();
    const canvasRef = useRef(null);

    // Text animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 20 
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Button hover animation
    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95
        }
    };

    // Section animations
    const sectionVariants = {
        initial: {
            backgroundColor: "rgba(147, 51, 234, 0.5)",
        },
        animate: {
            backgroundColor: "rgba(147, 51, 234, 0.8)",
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        hover: {
            backgroundColor: "rgba(147, 51, 234, 0.9)",
            transition: {
                duration: 0.3
            }
        }
    };

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
        <div className="text-black bg-white dark:bg-black dark:text-white min-h-screen p-3 md:p-8">
            <motion.section 
                className="text-white py-10 px-4 rounded-md"
                variants={sectionVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                style={{
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                {/* Add floating animation wrapper */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="container mx-auto flex flex-col md:flex-row justify-between items-center"
                >
                    <motion.div 
                        className="md:w-1/2 mb-10 md:mb-0"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2 
                            className="text-4xl font-bold leading-tight mb-4"
                            variants={itemVariants}
                        >
                            <motion.span
                                className="inline-block"
                                animate={{
                                    color: ["#ffffff", "#f3f3f3", "#ffffff"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                Discover
                            </motion.span>
                            <br />
                            <motion.span
                                className="inline-block"
                                animate={{
                                    color: ["#ffffff", "#f3f3f3", "#ffffff"],
                                }}
                                transition={{
                                    duration: 3,
                                    delay: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                Creative Vision
                            </motion.span>
                        </motion.h2>
                        
                        <motion.p 
                            className="text-xl mb-4"
                            variants={itemVariants}
                        >
                            We are experienced and knowledgeable professionals who are experts in all aspects of digital and creative services. We are dedicated to helping businesses enhance their visibility and effectively engage with their target audience through innovative multimedia services.
                        </motion.p>
                        
                        <motion.div 
                            className="bg-white text-black font-bold px-6 rounded w-40"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Contact/>
                        </motion.div>
                    </motion.div>
          
                    <motion.div 
                        ref={canvasRef} 
                        className={styles.main}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: "easeOut"
                        }}
                    >
                        <Canvas>
                            <OrbitControls enablePan={false} enableZoom={false}/>
                            <ambientLight intensity={2} />
                            <directionalLight position={[2,1,1]}/>
                            <Cube canvasRef={canvasRef} />
                        </Canvas>
                    </motion.div>
                </motion.div>
            </motion.section>
            <Modal />
        </div>
    )
}

function Cube({ canvasRef }) {
    const mesh = useRef(null);
    const options = {
        damping: 20
    }
    const mouse = {
        x: useSpring(useMotionValue(0), options),
        y: useSpring(useMotionValue(0), options)
    }

    const manageMouseMove = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const { clientX, clientY } = e;

        if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
            const x = ((clientX - rect.left) / rect.width) * 2 - 1;
            const y = ((clientY - rect.top) / rect.height) * 2 - 1;
            mouse.x.set(x);
            mouse.y.set(y);
        }
    }

    useEffect(() => {
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

    const texture_1 = useLoader(TextureLoader, service1.src)
    const texture_2 = useLoader(TextureLoader, service2.src)
    const texture_3 = useLoader(TextureLoader, service3.src)
    const texture_4 = useLoader(TextureLoader, service4.src)
    const texture_5 = useLoader(TextureLoader, service5.src)
    const texture_6 = useLoader(TextureLoader, service6.src)

    return (
        <motion3d.mesh 
            ref={mesh} 
            rotateX={mouse.y} 
            rotateY={mouse.x}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeOut"
            }}
        >
            <boxGeometry args={[3.5, 3.5, 3.5]} />
            <meshStandardMaterial map={texture_1} attach="material-0" />
            <meshStandardMaterial map={texture_2} attach="material-1" />
            <meshStandardMaterial map={texture_3} attach="material-2" />
            <meshStandardMaterial map={texture_4} attach="material-3" />
            <meshStandardMaterial map={texture_5} attach="material-4" />
            <meshStandardMaterial map={texture_6} attach="material-5" />
        </motion3d.mesh>
    )
}

export default Hero