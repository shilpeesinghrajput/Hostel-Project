// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="flex justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} CityHostel. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            Terms
          </a>
          <a href="#" className="hover:text-gray-400">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
