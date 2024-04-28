import { Link } from "react-router-dom";
import Button1 from "../button/Button1";

const HeroSection = () => {
  return (
    <div className="mt-4">
      <div className="bg-cover bg-center h-500 text-white py-12 px-4 sm:py-24 sm:px-10 object-fill flex justify-center" style={{ backgroundImage: `url(https://picsum.photos/1000/500)` }}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 mt-6 text-center">Welcome There!</h1>
          <p className="text-sm sm:text-base mb-4 text-center">HELLO!</p>
          <p className="text-sm sm:text-base w-3/4 text-center mb-8">Hostels provide budget-oriented, sociable accommodation where guests can rent a bed, usually a bunk bed, in a dormitory and share a bathroom, lounge and sometimes a kitchen. Rooms can be mixed or single-sex, and private rooms may also be available. They are often cheaper for the operator and occupants.</p>
          <div>
           <Link to="/about"> <Button1>MORE ABOUT US</Button1></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
