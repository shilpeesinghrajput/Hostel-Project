import React, { useState, useEffect } from 'react';

const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative top-[100px] h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center px-4 sm:px-8 md:px-12 lg:px-16">
              <h1 className="text-3xl dancing-font sm:text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8">
                {slide.description}
              </p>
              <a
                href={slide.ctaUrl}
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
              >
                {slide.ctaText}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;