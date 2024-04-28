import Button1 from "../button/Button1"

const HeroSection = () => {
  return (
    <div className="mt-[4rem]">
    <div className="bg-cover bg-center h-[500px] text-white py-24 px-10 object-fill flex justify-center " style={{ backgroundImage: `url(https://picsum.photos/1000/500)` }}>
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-[80px] sansita-bold sm:text-4xl md:text-[80px] font-bold mb-8 mt-10">Welcome There!</h1>
      <p className="text-[17px] sansita-bold tracking-[4px] mb-6">HELLO!</p>
      <p className="text-[17px] w-2/4 sansita mx-auto pb-10 mb-6">Hostels provide budget-oriented, sociable accommodation where guests can rent a bed, usually a bunk bed, in a dormitory and share a bathroom, lounge and sometimes a kitchen. Rooms can be mixed or single-sex, and private rooms may also be available. they are often cheaper for the operator and occupants..</p>
    <div>
    <Button1>MORE ABOUT US</Button1>
    </div>
    </div>
    
  </div>
  
  </div>
  
  );
};

export default HeroSection;
