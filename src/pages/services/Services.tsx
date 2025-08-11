import React, { useState } from 'react';
import CallToAction from '@/components/common/callToAction/CallToAction';
import Testimonial from '@/components/common/testimonial/Testimonial';
import { testimonials } from '@/components/common/testimonial/TestimonialData';
import Benifits from '@/components/service/benifits/Benifits';
import Features from '@/components/service/features/Features';
import ServiceHero from '@/components/service/hero/ServiceHero';
import Service from '@/components/service/Service';
import { services } from '@/components/service/ServiceData';

const Services = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      <ServiceHero />
      <Features />
      <Service services={services} />
      <Benifits />
      
      
      
      <Testimonial 
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      /> 
     
      
      <CallToAction />
    </div>
  );
};

export default Services;
