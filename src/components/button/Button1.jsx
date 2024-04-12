import React from 'react';

const Button = ({ children, onClick }) => {
  return (
<button onClick={onClick} className={`text-[#444349] focus:outline-none oswald-font 
animate-[swipe-in_0.5s_ease-out]  tracking-widest text-[16px] bg-[#ffdb74] rounded-sm 
hover:bg-transparent hover:border border-white hover:text-white h-[70px] w-60 `}>
  <span className="relative z-10">{children}</span>
</button>
  );
};

export default Button;


 