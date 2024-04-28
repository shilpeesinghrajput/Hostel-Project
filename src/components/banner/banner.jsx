import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({title}) => {
  return (

  <div className='bg-cover h-[380px] ' style={{ backgroundImage: `url(https://picsum.photos/2000/400)`, backgroundRepeat: "no-repeat" }}>
    <div className="flex justify-start">
      <h1 className="text-[40px] mt-[14rem] sansita-bold sm:text-2xl md:text-[50px] text-white ml-10" style={{ textAlign: "left" }}>{title}</h1>
    </div>
    <div className="flex justify-end">
    <Link to="/"><h6 className="text-[15px] font-bold text-white hover:text-[#ffdb74]">HOME</h6></Link> 
    <span className='text-white mx-1'>&gt;</span>
    <span><h6 className="font-bold text-[15px] text-white mr-[4rem] hover:text-[#ffdb74]">{title?.toUpperCase()}</h6></span>
    </div>
  </div>

  )
}

export default Banner