import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjfour,
  homeObjfive,
} from "../components/InfoSection/data";

import Navbar from "../components/Navbar";

import SideBar from "../components/SideBar";
import Equip from "../components/Equip";
import Footer from "../components/Footer";
import Fini from "../components/Fini";
import Testimonials from "../components/assets/Testimonials";

import Stats from "../components/Stats";
import Projects from "./Projects";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />

      <Navbar toggle={toggle} />

      <HeroSection />

      <InfoSection {...homeObjOne} />
      <AboutSection />
      <Equip />
      <InfoSection {...homeObjTwo} />

      <InfoSection {...homeObjThree} />
      <ServicesSection />
      <InfoSection {...homeObjfour} />
      <InfoSection {...homeObjfive} />

      <Projects />
      <Testimonials />
      <TestimonialsSection />
      <Stats />

      <Footer />
      <Fini />
    </>
  );
};

export default Home;
