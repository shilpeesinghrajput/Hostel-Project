import React from 'react';

import Heading from '../Heading/Heading';
import Buttons from "../button/Button"
import { Link } from 'react-router-dom';


const IconRow = () => {

    const handleButtonClick = () => {

    };
    const rooms=[

        {
          id :1,
          image: "https://picsum.photos/320/220",
          name:" DELUXE ROOM",
          price:1200,
          description:"very cozy and cold"
          },
          {
            id :2,
            image: "https://picsum.photos/320/220",
            name:"DELUXE ROOM",
            price:1200,
            description:"very cozy and cold"
            },
            {
              id :3,
              image: "https://picsum.photos/320/220",
              name:"DELUXE ROOM",
              price:1200,
              description:"very cozy and cold"
              },
              {
                id :4,
                image: "https://picsum.photos/320/220",
                name:" DELUXE ROOM",
                price:1200,
                description:"very cozy and cold"
                },
                {
                  id :5,
                  image: "https://picsum.photos/320/220",
                  name:"DELUXE ROOM",
                  price:1200,
                  description:"very cozy and cold"
                  },
                  {
                    id :6,
                    image: "https://picsum.photos/320/220",
                    name:" DELUXE ROOM",
                    price:1200,
                    description:"very cozy and cold"
                    },
                    {
                      id :7,
                      image: "https://picsum.photos/320/220",
                      name:" DELUXE ROOM",
                      price:1200,
                      description:"very cozy and cold"
                      },
                      {
                        id :8,
                        image: "https://picsum.photos/320/220",
                        name:"DELUXE ROOM",
                        price:1200,
                        description:"very cozy and cold"
                        },

                        {
                            id :9,
                            image: "https://picsum.photos/320/220",
                            name:"DELUXE ROOM",
                            price:1200,
                            description:"very cozy and cold"
                            },
      
      ]

  return (
<>
<Heading header={"ROOMS"} title={"WHAT WE OFFER FOR FREE"} classname="mb-[4rem] mt-[7rem]" />

<div className="flex flex-row justify-center">
        <div className="grid grid-cols-3 w-[80%] ">
        {rooms.map((room, index) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
          <div className="relative">
            <img src={room.image} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
              <div className="text-center">
                <p className="text-sm">{room.description}</p>
              </div>
            </div>
            </div>
          <div className="p-5 w-[385px] h-[290px] bg-slate-100 text-center">
              <a href="#">
                  <h5 className="mb-2 text-[20px] font-bold tracking-[4px] text-[#444349]  oswald-font hover:text-[#fd7444] text-center">{room.name}</h5>
              </a>
      <div className='flex flex-col justify-center align-middle' >
      
              <div className="text-[15px] font-bold tracking-[2px] text-[#444349] italic hover:text-[#fd7444] text-center">Per night from</div>
              <div className='text-[50px] font-bold text-[#fd7444] mb-2 text-center oswald-font tracking-[4px]'>{room.price}</div>
              </div>
              <div>
              <Link to="/room"><Buttons onClick={handleButtonClick}>MORE INFO</Buttons></Link> 
             </div>
          </div>
      </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default IconRow;
