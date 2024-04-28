import React from 'react';
import IconRow from '../components/icons/Icons';
import HeroSection from '../components/Herosection/HeroSection';
import MasonryOpus from '../components/Gallery/masonry';
import Heading from '../components/Heading/Heading';
import { Link } from 'react-router-dom';
import Banner from '../components/banner/banner';
import Buttons from "../components/button/Button";
import './room.scss';


const images = [
  { url: 'https://picsum.photos/320/220', alt: 'Image 1' },
  { url: 'https://picsum.photos/400/200', alt: 'Image 2' },
  { url: 'https://picsum.photos/300/240', alt: 'Image 3' },
  { url: 'https://picsum.photos/300/240', alt: 'Image 4' },
  { url: 'https://picsum.photos/350/300', alt: 'Image 5' },
  { url: 'https://picsum.photos/150/240', alt: 'Image 6' },
  { url: 'https://picsum.photos/150/260', alt: 'Image 7' },
  { url: 'https://picsum.photos/130/240', alt: 'Image 8' },
  { url: 'https://picsum.photos/200/240', alt: 'Image 9' },

  // Add more images as needed
];
const Room= () => {

  
  return (
  <>
    <div className="mt-[4rem]">

      <Banner title={'10 BED MIXED DORM'} />
</div>
<div className="container mt-4 py-16 ">
      {/* <h2 className="text-3xl font-bold text-center mb-6">About Us</h2> */}
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 px-10 mb-4 md:mb-0 ">
          <img src="https://picsum.photos/1000/500" alt="About Us" className="rounded shadow-lg"/>
          <div className="grid grid-cols-3 gap-6 mt-4">
  <img src="https://picsum.photos/320/220" className="object-cover w-full h-full" />
  <img src="https://picsum.photos/320/220" className="object-cover w-full h-full" />
  <img src="https://picsum.photos/320/220" className="object-cover w-full h-full" />
</div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className='text-[19px] oswald-font mb-8'>12-16 BED MIXED DORM</h2>
          <p className="text-lg  oswald text-[#928f88] mb-6">
            Our hostel has been serving the global traveler community since 1998. Nestled in the heart of the city, we provide a comfortable and affordable place to stay while offering all the amenities needed for a pleasant stay.
          </p>
         <div>
         <h2 className='text-[16px] oswald-font mb-4'>ROOM FACILITIES</h2>
         <ul className='oswald room_list'>
          <li>Duvet & Comfy Pillow</li>
          <li>TV</li>
          <li>Kettle & Coffee</li>
          <li>Plug Sockets</li>
          <li>Key Card</li>
          <li>Room Entry</li>
          <li>Security Cage</li>
          <li>Free WiFi</li>
         </ul>
         </div>
         <div className='mt-4'>
          <span className='font-bold text-[15px]'>CHECK-IN : <span className='text-[#ffdb74]'>3PM – 3AM</span></span>
         </div>
         <div>
         <span className='font-bold text-[15px]'>CHECK-OUT: <span className='text-[#ffdb74]'>10AM</span></span>
         </div>
          <div className="mt-6">
          <Link to="/appoinment"><Buttons className="h-[70px] w-60 tracking-[2px]">BOOK NOW!</Buttons></Link>
        </div>
        </div>
       
      </div>
    </div>
    
</> 
  );
}

export default Room;
