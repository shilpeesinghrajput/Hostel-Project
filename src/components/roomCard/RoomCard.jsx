import React from 'react';
import './roomcard.scss'

import Heading from '../Heading/Heading';
import Buttons from "../button/Button"
import { Link } from 'react-router-dom';


const RoomCard = () => {

    const handleButtonClick = () => {

    };
    const rooms=[

        {
          id :1,
          image: "https://picsum.photos/350/220",
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
          <Heading header={'ROOMS'} title={'WHAT WE OFFER FOR FREE'} classname="mb-[4rem] mt-[7rem]" />
    
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[80%]">
              {rooms.map((room, index) => (
                <div key={index} className="max-w-sm">
                  <div className="relative  overflow-hidden">
                    <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                      <div className="text-center">
                        <p className="text-sm">{room.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-100 text-center">
                    <h5 className="mb-2 text-2xl font-bold text-gray-800 hover:text-[#fd7444]">{room.name}</h5>
                    <div className="text-sm font-bold text-gray-700 italic hover:text-[#fd7444]">Per night from</div>
                    <div className="text-xl font-bold text-[#fd7444] mb-2">${room.price}</div>
                    <div>
                      <Link to="/room">
                        <Buttons onClick={handleButtonClick}>MORE INFO</Buttons>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
};

export default RoomCard;
