import React, { useState } from "react";
import Logo from "../../assets/logo2x.webp";

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
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-[20px] font-medium"
              >
                Address
              </a>
              <a
                href="#"
                className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-[20px] font-medium"
              >
                Call us
              </a>
              {/* Add more links as needed */}
            </div>
          </div>
          <div className="lg">
            <button
              onClick={toggleNavbar}
              className={`text-white focus:outline-none bg-black rounded-sm hover:bg-orange-300 focus:text-white p-4 `}
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
          <div className="px-10 pt-10 oswald-font pb-6 space-y-6 text-white text-center">
            <a href="#" className="block font-bold tracking-widest
             text-[30px] pt-10  hover:text-yellow-200 ">
              HOME
            </a>
            <a href="#" className="block font-bold text-[30px]  hover:text-yellow-200">
              ABOUT
            </a>

            <a href="#" className="block  font-bold text-[30px]  hover:text-yellow-200">
              FEATURES
            </a>

            <a href="#" className="block font-bold text-[30px]  hover:text-yellow-200">
              GALLERY
            </a>

            <a href="#" className="block  font-bold text-[30px]  hover:text-yellow-200">
              BLOG
            </a>

            <a href="#" className="block font-bold text-[30px]  hover:text-yellow-200">
              ROOMS
            </a>
            {/* Add more links as needed */}
          </div>
        </div>
    
    </nav>
  );
};

export default Navbar;
