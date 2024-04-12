

import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Herosection/HeroSection';
// import FeatureList from './components/FeatureList/';
// import Gallery from './components/Gallery/';
// import ArticlePreview from './components/ArticlePreview';
// import Testimonial from './components/Testimonial';
import ContactForm from './components/Contactform/ContactForm';
import Footer from './components/Footer/Footer';
import Carousel from "./components/carousel/carousel"
import CarouselWithMultipleCards from './components/card/CardCarousel';
import Heading from './components/Heading/Heading';
import Staffs from "./components/staff/Staff"
import IconRow from './components/icons/Icons';



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
      name:" deluxe room",
      price:1200,
      description:"very cozy and cold"
      },
      {
        id :3,
        image: "https://picsum.photos/320/220",
        name:" deluxe room",
        price:1200,
        description:"very cozy and cold"
        },
        {
          id :4,
          image: "https://picsum.photos/320/220",
          name:" deluxe room",
          price:1200,
          description:"very cozy and cold"
          },
          {
            id :5,
            image: "https://picsum.photos/320/220",
            name:" deluxe room",
            price:1200,
            description:"very cozy and cold"
            },
            {
              id :6,
              image: "https://picsum.photos/320/220",
              name:" deluxe room",
              price:1200,
              description:"very cozy and cold"
              },
              {
                id :7,
                image: "https://picsum.photos/320/220",
                name:" deluxe room",
                price:1200,
                description:"very cozy and cold"
                },
                {
                  id :8,
                  image: "https://picsum.photos/320/220",
                  name:" deluxe room",
                  price:1200,
                  description:"very cozy and cold"
                  },

]

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Carousel slides={slides} />
      <HeroSection />

      <CarouselWithMultipleCards products={cardCarousel}/>

      <section className="contact-section">
        <Staffs imageUrls={imageUrls} />;
        <IconRow />
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default App;
