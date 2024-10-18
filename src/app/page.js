"use client"
import { AnimatedModalDemo } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import {ReactLenis} from "lenis/react"
import { ThemeProvider } from '../ThemeContext';
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Package from "@/components/Package";
import { Testimonials } from "@/components/Testimonials";
import InfiniteBrandScroll from "@/components/InfiniteBrandScroll";
import ContactUs from "@/components/ContactUs";
import Team from "@/components/Team";
export default function Home() {
  return (
    <>
    <ThemeProvider>
      <ReactLenis root>
        <Navbar/>
        <Hero/>
        <InfiniteBrandScroll/>
        <Services/>   
        <About/>
        <Package/>
        <Testimonials/>
        <Team/>
        <ContactUs/>
        <Footer/>
      </ReactLenis>
    </ThemeProvider>
    </>
  );
}
