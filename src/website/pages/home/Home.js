import React from "react";
// Pages
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import LeftImageSection from "./components/LeftImageSection";
import OurService from "./components/OurService";
import Testimonial from "./components/Testimonial";
import RightImageSection from "./components/RightImageSection";
import Patch from "./components/Patch";

const Home = () => {

  return (
    <div>
      <HeroSection />
      <Features />
      <LeftImageSection />
      <Patch />
      <RightImageSection />
      <OurService />
      <Testimonial />
    </div>
  );
};

export default Home;
