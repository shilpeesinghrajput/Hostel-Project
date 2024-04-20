import React, { useState } from 'react';
import Heading from '../Heading/Heading';

const Carousel = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const goToNext = () => {
    setCurrentItem((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentItem((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <>
    <Heading
    header={"GUESTS SAY"} 
    title={"WHAT WE OFFER FOR FREE"} 
    classname="mb-[4rem] mt-[7rem]" />

  
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${
                index === currentItem ? 'block' : 'hidden'
              } absolute top-0 left-0 w-50%`}
            >
              <img src={item.image} alt={item.alt} className="w-50%" />
              <p className="text-center mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-l-md"
      >
        Prev
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-r-md"
      >
        Next
      </button>
    </div>
    </>
  );
};

export default Carousel;
