import React from 'react';
import "./icons.scss"
import { Telephone, GeoAlt, CupStraw ,ThermometerHigh} from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLocation ,faPhone} from '@fortawesome/free-solid-svg-icons';
import Heading from '../Heading/Heading';


const IconRow = () => {
  const icons = [
    { IconComponent:  CupStraw ,name:"TEA & COFFEE"},
    { IconComponent: ThermometerHigh,name:"HOT SHOWERS" },
    { IconComponent:  GeoAlt,name:"LAUNDRY" },
    { IconComponent:  CupStraw,name:"HOT SHOWERS"},
    { IconComponent: GeoAlt,name:"HOT SHOWERS" },
    { IconComponent: Telephone,name:"HOT SHOWERS"},

    { IconComponent:  CupStraw ,name:"TEA & COFFEE"},
    { IconComponent: ThermometerHigh,name:"HOT SHOWERS" },
    { IconComponent:  GeoAlt,name:"LAUNDRY" },
    { IconComponent:  CupStraw,name:"HOT SHOWERS"},
    { IconComponent: GeoAlt,name:"HOT SHOWERS" },
    { IconComponent: Telephone,name:"HOT SHOWERS"},
    // Add more icons as needed
  ];

  return (
<>
<Heading header={"Facilities"} title={"WHAT WE OFFER FOR FREE"} classname="mb-[4rem] mt-[7rem]" />

<div className="flex flex-row justify-center">
        <div className="grid grid-cols-6 w-[80%]">
        {icons.map((icon, index) => (
           <div className="flex flex-col items-center cursor-pointer">
        <div className="parent bg-[#ffdb74] p-2 rounded-full transition-colors duration-300 hover:bg-[#444349] hover:text-white  w-[120px] h-[120px] flex flex-row justify-center  items-center"
              >
            
                  <icon.IconComponent size={60} color={icon.color}
                  className="icon-inner child text-[#444349] transition-colors duration-300 hover:text-white"
                   />
             
           </div>
           <div className="mt-8 mb-6 text-[14px] text-[#444349] oswalds tracking-[1px]">{icon.name}</div>
         </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default IconRow;
