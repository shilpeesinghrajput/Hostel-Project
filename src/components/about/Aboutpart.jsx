import { Link } from "react-router-dom";
import Buttons from "../button/Button"
const AboutPart = () => {
    return (
      <div className="container mt-4 py-16 ">
      {/* <h2 className="text-3xl font-bold text-center mb-6">About Us</h2> */}
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 px-10 mb-4 md:mb-0 ">
          <img src="https://picsum.photos/1000/500" alt="About Us" className="rounded shadow-lg"/>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <p className="text-lg">
            Our hostel has been serving the global traveler community since 1998. Nestled in the heart of the city, we provide a comfortable and affordable place to stay while offering all the amenities needed for a pleasant stay.
          </p>
          <p className="mt-4">
            We believe in creating a friendly, inclusive environment where travelers from all over the world can connect and share experiences. Our staff are always on hand to help you with anything you need, from city guides to travel tips.
          </p>
          <div className="mt-6">
          <Link to="/rooms"><Buttons>View Our Rooms</Buttons></Link>
        </div>
        </div>
       
      </div>
    </div>
    
    );
  };
  
  export default AboutPart;
  