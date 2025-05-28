import React from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7551620/pexels-photo-7551620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Caretaker helping elderly person"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
            <Heart className="h-8 w-8 text-primary" />
            <span className="ml-3 text-2xl md:text-3xl font-bold text-primary">CARETAKERS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Compassionate Care<br className="hidden sm:block" />for Every Need
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white mb-10 leading-relaxed drop-shadow-lg">
            Professional home-nursing, adoption services, and companionship 
            tailored to improve lives and provide support when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-medium rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-medium rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;