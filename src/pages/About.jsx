import React from 'react';
import IconRow from '../components/icons/Icons';
import AboutPart from '../components/about/Aboutpart';
import Banner from '../components/banner/banner';
import Staffs from "../components/staff/Staff"
import Heading from '../components/Heading/Heading';
import ContactForm from '../components/Contactform/ContactForm';




const imageUrls = [
  "https://picsum.photos/220",
  "https://picsum.photos/220",
  "https://picsum.photos/220",
  "https://picsum.photos/220",
  // Add more image URLs as needed
];
const About = () => {
  return (
    <div>
  <Banner title={"About"}/>
  <Heading
        header={"WELCOME!"}
        title={"ABOUT US"}
        classname="mb-[1rem] mt-[7rem]"
      />
  <AboutPart/>

  <IconRow />
  <Staffs imageUrls={imageUrls} />;
  <ContactForm />
    
    
    </div>
  );
}

export default About;
