import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="text-white hover:before:bg-reborder-red-500 relative h-[50px] w-40 overflow-hidden bg-[#444349] px-3 text-[#444349] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 
    before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#ffdb74] before:transition-all before:duration-500 hover:text-[#444349] hover:shadow-[#ffdb74] hover:before:left-0 hover:before:w-full"><span className="relative z-10">{children}</span></button>

  );
};

export default Button;


