// HeroSection.jsx
const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-96 text-white p-8"
      style={{ backgroundImage: `url('/hero-bg.jpg')` }}
    >
      <h1 className="text-4xl font-bold mb-4">Only for You</h1>
      <p className="mb-8">Save cash for fun</p>
      <a
        href="#book"
        className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 py-2 px-4 rounded"
      >
        Book Now
      </a>
    </div>
  );
};

export default HeroSection;
