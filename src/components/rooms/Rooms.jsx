import React, { useState } from 'react';
import Buttons from "../button/Button"
import { Link } from 'react-router-dom';

const CardGrid = ({product}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  

  const handleButtonClick = () => {

  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  return (
  

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="relative">
      <img src={product.image} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
        <div className="text-center">
          <p className="text-sm">{product.description}</p>
        </div>
      </div>
      </div>
    <div className="p-5 w-[385px] h-[290px] bg-slate-100 text-center">
        <a href="#">
            <h5 className="mb-2 text-[20px] font-bold tracking-[4px] text-[#444349]  oswald-font hover:text-[#fd7444] text-center">{product.name}</h5>
        </a>
<div className='flex flex-col justify-center align-middle' >

        <div className="text-[15px] font-bold tracking-[2px] text-[#444349] italic hover:text-[#fd7444] text-center">Per night from</div>
        <div className='text-[50px] font-bold text-[#fd7444] mb-2 text-center oswald-font tracking-[4px]'>{product.price}</div>
        </div>
      <Link to="/room"><Buttons onClick={handleButtonClick}>MORE INFO</Buttons></Link> 
    </div>
</div>

  );
};

export default CardGrid;