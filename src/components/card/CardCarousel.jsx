import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardGrid from "../rooms/Rooms";
import Heading from '../Heading/Heading';

const CarouselWithMultipleCards = ({ products }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Initial slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1 // Show only one slide on mobile screens
        }
      }
    ]
  };

  return (
    <div className="mt-10">
      <div className="flex justify-center items-center">
        <div className="w-full md:w-4/5">
          <Slider ref={sliderRef} {...settings} className="mt-16">
            {products.map((product, index) => (
              <div key={product.id}>
                <CardGrid product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithMultipleCards;
