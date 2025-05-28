import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  iconColor: string;
  buttonText: string;
  buttonLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  bgColor,
  textColor,
  iconColor,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-card-hover ${bgColor}`}>
      <div className="relative p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconColor} mb-6 transform transition-transform group-hover:rotate-3`}>
            {icon}
          </div>
          <h3 className={`text-xl md:text-2xl font-bold mb-4 ${textColor}`}>{title}</h3>
          <p className={`${textColor} opacity-90 mb-8 leading-relaxed`}>{description}</p>
          <a
            href={buttonLink}
            className="inline-flex items-center px-6 py-3 bg-white rounded-full text-primary font-medium shadow-shine hover:shadow-glow transition-all duration-300"
          >
            {buttonText}
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;