import React from 'react'
import { FaLink } from 'react-icons/fa'
import bg from "../../assets/bg-wall.jpg"

const Wall = () => {
  return (
    <div className="relative ">
      <img
        src={bg}
        className="sm:absolute inset-0 object-cover w-full h-[500px] "
        alt=""
      />
      <div className="relative ">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <p className='text-red-600'>Cyber Week Deals</p>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
              Save on Xbox and PC accessories
              </h2>
              <p className="max-w-xl mb-4 text-base text-black md:text-lg">
              Turn up the thrills with can’t-miss deals on headsets, mice, keyboards, and more
              </p>
              <button className='px-4 py-2 bg-black text-white mt-5  '>Shop Xbox accessories</button>
              <button className='px-4 py-2  text-black mt-5  '>Shop PC accessories </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wall