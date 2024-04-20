import React, { useState } from "react";
import Heading from "../Heading/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons" // Import social media icons from Font Awesome

const Staff = ({ imageUrls }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track which image is being hovered

  return (
    <>
      <Heading
        header={"Our Staff"}
        title={"MEET THE TEAM"}
        classname="mb-[4rem] mt-[7rem]"
      />

      <div className="flex flex-row justify-center">
        <div className="grid grid-cols-4  w-[70%]">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ position: "relative" }}
            >
              <img
                src={url}
                alt={`Image ${index}`}
                className=" h-auto rounded-full"
              />
              {hoveredIndex === index && (
                <div
                  className="absolute inset-0 flex justify-center items-center rounded-full"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "220px",
                  height: "auto"}} // Backdrop
                >
                   
                  <FontAwesomeIcon icon={faPaperclip} className="text-white mx-2 swipe-up" />
                  <FontAwesomeIcon icon={faPaperclip} className="text-white mx-2 swipe-up" />
                  <FontAwesomeIcon icon={faPaperclip} className="text-white mx-2 swipe-up" />
                </div>
              )}
              
            </div>

            
          ))}
          
          
        </div>
        
      </div>
    </>
  );
};

export default Staff;
