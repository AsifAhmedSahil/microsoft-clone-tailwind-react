import React from 'react'
import laptops from "../../assets/laptops.webp"
import headphones from "../../assets/headphones.jpg"

const Slider = () => {
  return (
    <div className='slider flex flex-col-reverse md:flex-row bg-[#f2f2f2] mx-10 h-[500px]'>

        <div className='left flex flex-col justify-center items-center md:items-baseline py-12'>
            <h1 className='md:text-3xl text-2xl mx-5 text-center font-bold '>Save on select Surface</h1>
            <p className=' mx-5 mt-4 text-center md:text-left'>Unwrap possibility with hot deals on powerful, portable Surface devices for everyone on your list</p>
            <button className='px-4 py-2 bg-black text-white mt-5 mx-5 '>Shop Surface Device</button>
        </div>
        <div>
            <img className='' src={headphones} alt="" />
        </div>
        
    </div>
  ) 
}

export default Slider