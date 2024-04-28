import React from "react";
import Logos from "../../assets/logo1.webp";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const sections = [
  {
    title: "QUICK LINKS",
    items: [
      "About us", "Gallery", "Rooms", "Contact us"
    ],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "CONTACT INFO",
    items: ["123, New Lenox Chicago, IL 60606", "123-456-7890", "info@yoursite.com"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#3d3c3f] text-gray-300 py-y px-2">

      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
         <div className="col-span-2 pt-8 md:pt-2">
         <div>
            <span className="text-black font-bold text-[40px]">
              <img src={Logos} alt="" srcset="" className="w-full min-w-[40%] max-w-[60%]" />
            </span>
          </div>
        </div>
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-[#928f88] hover:text-[#fd7444]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

       
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-[#928f88]">
      <p className="py-4"><a href="https://axiomthemes.com/" target="_blank" rel="noopener noreferrer">AxiomThemes© 2024</a> All rights reserved. <a href="https://axiomthemes.com/terms-of-service/" target="_blank" rel="noopener noreferrer"  className="hover:text-[#fd7444]">Terms of use</a> and <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd7444]">Privacy Policy</a></p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-xl">
        {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                <Icon className={`text-[#444349] focus:outline-none oswald-font 
                  animate-[swipe-in_0.5s_ease-out]  tracking-widest bg-[#ffdb74] rounded-full
                  hover:bg-transparent hover:border border-white hover:text-white h-[40px] w-[40px]`} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;