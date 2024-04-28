

import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/Herosection/HeroSection';
// import FeatureList from './components/FeatureList/';
// import Gallery from './components/Gallery/';
// import ArticlePreview from './components/ArticlePreview';
// import Testimonial from './components/Testimonial';
import ContactForm from '../components/Contactform/ContactForm';
import Footer from '../components/Footer/Footer';
import Carousel from "../components/carousel/carousel"
import CarouselWithMultipleCards from '../components/card/CardCarousel';
import Staffs from "../components/staff/Staff"
import IconRow from '../components/icons/Icons';
import CarouselGuest from '../components/guest/Guest';
import MasonryOpus from '../components/Gallery/masonry';
import Heading from '../components/Heading/Heading';



const slides = [
  {
    imageUrl:"https://picsum.photos/1000/500",
    title: 'Book Your Stay',
    description: 'Discover our amazing products and services',
    ctaText: 'BOOK TODAY! ',
    ctaUrl: '/products',
  },
  {
    imageUrl: 'https://picsum.photos/1000/500',
    title: 'Explore Our Latest Offerings',
    description: 'Check out our newest arrivals',
    ctaText: 'BOOK TODAY!',
    ctaUrl: '/about',
  },
  // Add more slides as needed
];

const imageUrls = [
  "https://picsum.photos/220",
  "https://picsum.photos/220",
  "https://picsum.photos/220",
  "https://picsum.photos/220",
  // Add more image URLs as needed
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

const items = [
  {
    image:'https://picsum.photos/400/200',
    alt: 'Image 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: 'https://picsum.photos/400/200',
    alt: 'Image 2',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more items as needed
];

const Home = () => {
  return (
    <div>
    <Carousel slides={slides} />
    <Heading header={"Rooms"} title={"MORE ACCOMMODATIONS"} className="mb-[3rem]" />
    <CarouselWithMultipleCards products={cardCarousel}/>

    <section className="contact-section">
      <Staffs imageUrls={imageUrls} />;
      <IconRow />

      <HeroSection />
      <Heading
        header={"Photogallery"}
        title={"OUR ACCOMODATIONS"}
        classname="mb-[5rem] mt-[7rem]"
      />
      <div className="container mx-auto my-8">
      <MasonryOpus images={images} />

    </div>
    

    <CarouselGuest items={items} />
      <ContactForm />
    </section>
  
  </div>
  )
}

export default Home

