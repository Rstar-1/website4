import React from 'react'
import Banner from './components/Banner'
import ServiceSection from './components/Service'
import OurService from '../home/components/OurService';
import Testimonial from '../home/components/Testimonial';

const Service = () => {
  return (
    <div>
      <Banner />
      <ServiceSection />
      <OurService />
      <Testimonial />
    </div>
  );
}

export default Service
