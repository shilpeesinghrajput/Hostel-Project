import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLocation ,faPhone} from '@fortawesome/free-solid-svg-icons';
import Heading from '../Heading/Heading';


const IconRow = () => {
  const icons = [
    { name: faPhone, color: '#ffdb74' },
    { name: faLocation, color: '#ffdb74' },
    { name: faLocation, color: '#ffdb74' },
    { name: faPhone, color: '#ffdb74' },
    { name: faCode, color: '#ffdb74' },
    { name: faCode, color: '#ffdb74' },
  ];

  return (
<>
<Heading header={"Facilities"} title={"WHAT WE OFFER FOR FREE"} classname="mb-[8rem] mt-[7rem]" />

     <div className="flex flex-row justify-center">
     <div className="grid grid-cols-6  w-[80%]">
        {icons.map((icon, index) => (
           <div className="flex flex-col items-center cursor-pointer">
           <div className="bg-[#ffdb74] p-2 rounded-full transition-colors duration-300 hover:bg-[#444349]">
             <FontAwesomeIcon icon={icon.name}  key={index} size="6x" className="text-[#444349] transition-colors duration-300   hover:text-white"  />
           </div>
           <div className="mt-8 text-[14px] text-[#444349] oswalds">HOME</div>
         </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default IconRow;
