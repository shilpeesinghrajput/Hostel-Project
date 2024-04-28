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
    }, 3000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
      
<div className="mt-[10rem]">
<Heading header={"Rooms"} title={"MORE ACCOMMODATIONS"} className="mb-[3rem]" />
      <div className="flex flex-row justify-center items-center">

        <div className="budhu_shilpee w-[80%] chup_budbak ">
          <Slider ref={sliderRef} {...settings} className='mt-16'>
            {products.map((product, index) => (
            <div  key={product.id} >
                <CardGrid product={product}
                 />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      </div>
    </>
  );
};

export default CarouselWithMultipleCards;
