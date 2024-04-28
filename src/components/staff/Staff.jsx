import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Buttons from "../button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./staff.scss"
 // Import social media icons from Font Awesome
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Staff = ({ imageUrls }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track which image is being hovered

  const handleButtonClick = () => {
    // Add your button click logic here
  };

  return (
    <>
      <Heading
        header={"Our Staff"}
        title={"MEET THE TEAM"}
        classname="mb-[4rem] mt-[4rem]"
      />

      <div className="flex justify-center">
        <div className="w-[70%]">
          <div className="grid-container">
            {imageUrls.map((url, index) => (
              <div className="flex flex-col items-center">
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ position: "relative" }}
                >
                  <img
                    src={url}
                    alt={`Image ${index}`}
                    className="h-auto rounded-full"
                  />
                  {hoveredIndex === index && (
                    <div
                      className="absolute inset-0 flex justify-center items-center rounded-full"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        width: "220px",
                        height: "auto"
                      }}
                    >
                      <FaFacebook
                
                        className=" mx-2 swipe-up focus:outline-none oswald-font
                        animate-[swipe-in_0.5s_ease-out]  tracking-widest bg-white rounded-full
                        hover:bg-transparent hover:border border-white hover:text-white h-[30px] w-[30px]"
                      />
                      <FaTwitter
                      className=" mx-2 swipe-up focus:outline-none oswald-font
                      animate-[swipe-in_0.5s_ease-out]  tracking-widest bg-white rounded-full
                      hover:bg-transparent hover:border border-white hover:text-white h-[30px] w-[30px]"
                    />
                
                      <FaInstagram
                
                  className=" mx-2 swipe-up focus:outline-none oswald-font
                  animate-[swipe-in_0.5s_ease-out]  tracking-widest bg-white rounded-full
                  hover:bg-transparent hover:border border-white  hover:text-white h-[30px] w-[30px]"
                      />
                    </div>
                  )}
                </div>
                <div>
                <div className="mt-6 text-[#444349] oswald-font tracking-[1px]">
                  <h3 className="text-[20px] hover:text-[#fd7444]"> DAVID JHON</h3>
                  <h5 className="text-[#ffd874] text-[16px] italic">Senior Manager</h5>
                </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center the button horizontally */}
          <div className="flex justify-center mt-[2rem]">
            <Buttons className={"w-[300px] h-[70px]"}  onClick={handleButtonClick}

            >
              MORE INFO</Buttons>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staff;
