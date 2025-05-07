import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  const bgStyle = backgroundImage
    ? { backgroundImage: `linear-gradient(to right bottom, rgba(15, 43, 91, 0.8), rgba(30, 58, 138, 0.9)), url(${backgroundImage})` }
    : {};

  return (
    <div 
      className="bg-hero-pattern bg-cover bg-center py-24 px-4"
      style={bgStyle}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto animate-slide-up">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;