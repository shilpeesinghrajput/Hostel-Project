import React from 'react';
import IconRow from '../components/icons/Icons';
import AboutPart from '../components/about/Aboutpart';
import HeroSection from '../components/Herosection/HeroSection';
import MasonryOpus from '../components/Gallery/masonry';
import Heading from '../components/Heading/Heading';
import { Link } from 'react-router-dom';
import Banner from '../components/banner/banner';
import Roomscard from "../components/roomCard/RoomCard"

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

const cardCarousel=[

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


                    
  
  ]
const Rooms= () => {

  
  return (
    <div className="mt-[4rem]">

      <Banner title={'Rooms'} />
     
<Roomscard/>
      
      <IconRow />
</div>
    
  );
}

export default Rooms;
