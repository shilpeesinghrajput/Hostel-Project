import React, { useState } from "react";
import Logo from "../../assets/logo2x.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation ,faPhone} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full z-10  fixed top-0">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-black font-bold text-[40px]">
              <img src={Logo} alt="" srcset="" className="w-full min-w-[25%] max-w-[47%]" />
            </span>
          </div>
          <div className="hidden sm:block">
          <div className="flex justify-center space-x-4">
    <div className="flex items-center space-x-2">
        <span className="text-[#444349] oswalds py-4 font-bold"><FontAwesomeIcon icon={faLocation} color="#ffdb74" size="1x" /></span>
        <a href="#" className="text-[#444349] oswalds py-5 tracking-[1px] text-[14px]">ADDRESS</a>
    <span className="text-[#928f88] oswald-regular py-5 pr-10 text-[14px] font-medium tracking-[2px]">123, New Lenox Chicago, IL 60606</span>

    </div>
    <div className="flex items-center space-x-2">
        <span className="text-[#444349] oswalds py-4"><FontAwesomeIcon icon={faPhone} color="#ffdb74" size="1x" /></span>
        <a href="#" className="text-[#444349] oswalds py-5 text-[14px] tracking-[2px]">CALL US</a>
    <span className="text-[#928f88] oswald-regular py-5 text-[14px] text-[#ffdb74] tracking-[2px]">123-456-7890</span>

    </div>
</div>
          </div>
          <div className="lg">
            <button
              onClick={toggleNavbar}
              className={`text-white focus:outline-none bg-black rounded-sm hover:bg-[#ffdb74] focus:text-white p-4 `}
            >
              {isOpen ? (
                <svg
                  className="h-8 w-8 text-white hover:text-black font-bold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8 text-white hover:text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    
        <div
          className={`bg-[#3d3c3f]/95 fixed left-0  w-full text-white overflow-y-hidden ease-in-out transition-all duration-300 transform ${
            isOpen ? "h-full" : "h-0"
          }`}
        >
          <div className="px-10 pt-10 oswalds pb-6 space-y-6 text-white text-center  text-[43px]">
            <a href="#" className="block font-[400] tracking-widest
             text-[35px] pt-10  hover:text-yellow-200 ">
              HOME
            </a>
            <a href="#" className="block font-[400] tracking-widest
             text-[35px] hover:text-yellow-200 ">
              ABOUT
            </a>

            <a href="#" className="block font-[400] tracking-widest
             text-[35px] hover:text-yellow-200 ">
              FEATURES
            </a>

            <a href="#" className="block font-[400] tracking-widest
             text-[35px] hover:text-yellow-200 ">
              GALLERY
            </a>

            <a href="#" className="block font-[400] tracking-widest
             text-[35px] hover:text-yellow-200 ">
              BLOG
            </a>

            <a href="#" className="block font-[400] tracking-widest
             text-[35px] hover:text-yellow-200 ">
              ROOMS
            </a>
            {/* Add more links as needed */}
          </div>
        </div>
    
    </nav>
  );
};

export default Navbar;
