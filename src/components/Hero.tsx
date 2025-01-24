import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gray-900 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="image-home.jpg"
          alt="AI Technology"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-7xl font-bold text-white mb-8 leading-tight">
            Revoluciona tu <span className="text-[#FF4B00]">creatividad</span> con tecnología AI
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-xl">
            Transformamos tus ideas en experiencias visuales extraordinarias usando lo último
            en tecnología AI y expertise creativo.
          </p>
          <a
            href="#featured-projects"
            className="inline-flex items-center px-8 py-4 bg-[#FF4B00] text-white rounded-lg text-lg font-semibold hover:bg-[#E64400] transition-colors duration-300"
          >
            Ver proyectos
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
