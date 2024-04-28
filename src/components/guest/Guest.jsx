import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from '../Heading/Heading';

const Guest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display only one slide at a time
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <div />, // Pass an empty component to hide the next arrow
    prevArrow: <div />,
    pauseOnHover: true, // Pause autoplay on hover
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const guests = [
    {
      title: "DAVID",
      description: "I’ve always enjoyed working with you guysYou have talented people who obviously enjoy what they do and who they do it fo Time and time again, I want to thank you and say how awesome it was for a stay!",
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "DAVID",
      description: "I’ve always enjoyed working with you guysYou have talented people who obviously enjoy what they do and who they do it fo Time and time again, I want to thank you and say how awesome it was for a stay!",
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "DAVID",
      description: "I’ve always enjoyed working with you guysYou have talented people who obviously enjoy what they do and who they do it fo Time and time again, I want to thank you and say how awesome it was for a stay!",
      imageUrl: "https://picsum.photos/200",
    },
  ];

  return (
    <>
      <div className='bg-[#f7f5f2]'>
        <Heading
          header={"Guests Say"}
          title={"TESTIMONIALS"}
          className="mb-12 pt-10"
        />
        <div className="flex justify-center">
          <div className="w-full md:w-2/4">
            <Slider {...settings}>
              {guests.map((item, index) => (
                <div key={index} className="text-center text-[#928f88] tracking-[2px] oswald-font">
                  <p className="text-[17px] w-3/4 mx-auto pb-10">{item.description}</p>
                  <img src={item.imageUrl} alt={`Image ${index}`} className="mx-auto w-[90px] h-auto rounded-full" />
                  <div className="mt-4">
                    <h2 className="text-[15px] mb-10">{item.title}</h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guest;
