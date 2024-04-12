import React from "react";
import Heading from "../Heading/Heading";

const Staff = ({ imageUrls }) => {
  return (
<>
<Heading header={"Our Staff"} title={"MEET THE TEAM"} classname="mb-[8rem] mt-[7rem]" />

    <div className="flex flex-row justify-center">
      <div className="grid grid-cols-4  w-[70%]">
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img
              src={url}
              alt={`Image ${index}`}
              className="w-50 h-auto rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Staff;
