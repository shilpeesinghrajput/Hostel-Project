import React, { useState } from 'react';
import Buttons from "../button/Button"

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
            <h5 className="mb-2 text-[20px] font-bold tracking-tight text-[#444349]  oswald-font hover:text-[#fd7444] text-center">{product.name}</h5>
        </a>
<div className='flex flex-row justify-center gap-1  align-middle' >

        <div className="mb-3 font-normal text text-gray-r700 dark:text-gray-400 max-w-[28%] items-center text-right">Per night from</div>
        <div className='text-[50px] font-bold text-[#fd7444]'>{product.price}</div>
        </div>
       <Buttons onClick={handleButtonClick}>MORE INFO</Buttons>
    </div>
</div>

  );
};

export default CardGrid;