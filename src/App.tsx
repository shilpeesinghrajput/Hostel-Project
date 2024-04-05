

import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Herosection/HeroSection';
// import FeatureList from './components/FeatureList/';
// import Gallery from './components/Gallery/';
// import ArticlePreview from './components/ArticlePreview';
// import Testimonial from './components/Testimonial';
import ContactForm from './components/Contactform/ContactForm';
import Map from './components/Map/map';
import Footer from './components/Footer/Footer';
import Carousel from "./components/carousel/carousel"


const slides = [
  {
    imageUrl: 'https://example.com/slide1.jpg',
    title: 'Welcome to Our Website',
    description: 'Discover our amazing products and services',
    ctaText: 'Shop Now',
    ctaUrl: '/products',
  },
  {
    imageUrl: 'https://example.com/slide2.jpg',
    title: 'Explore Our Latest Offerings',
    description: 'Check out our newest arrivals',
    ctaText: 'Learn More',
    ctaUrl: '/about',
  },
  // Add more slides as needed
];

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Carousel slides={slides} />
      <HeroSection />
      {/* Other sections like Features, Gallery, etc. would go here */}
      {/* <FeatureList />
      <Gallery />
      <ArticlePreview />
      <Testimonial /> */}
      {/* Contact section with Map and ContactForm */}
      <section className="contact-section">
        <Map />
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default App;
