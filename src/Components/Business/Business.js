import React from 'react'
import surface8 from "../../assets/surface pro 8 bussiness.webp"
import terms from "../../assets/micro team bussiness.webp"
import win11 from "../../assets/win 11 bussiness.jpg"
import mic365 from "../../assets/micro 365 busines.webp"

import { FaGreaterThan } from 'react-icons/fa';

const Business = () => {
  return (
    <div className='mt-[150px] my-[150px] '>
    <h2 className="text-4xl my-9">For Business</h2>
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* 1st card */}
    <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg " src={surface8} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900  font-medium mb-3 text-3xl">Up to $400 off Surface Pro 8 for Business</h5>
      <p class="text-gray-700 text-base mb-4">
      Multitask like a pro with laptop power, tablet portability, and a large display designed for pen and touch. Offer ends 12/31.
      </p>
      {/* <Link></Link> */}
      <div className='flex  items-center underline text-red-900 font-bold'>Shop Surface Pro 8 for Business  <FaGreaterThan/></div>
    </div>
  </div>
</div>

{/* 2nd card */}
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg " src={terms} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 font-medium mb-3 text-3xl">Get Microsoft Teams for free</h5>
      <p class="text-gray-700 text-base mb-4">
      Online meetings, chat, and shared cloud storage—all in one place.
      </p>
      {/* <Link></Link> */}
      <div className='flex  items-center underline text-red-900 font-bold'>
      Sign up for free  <FaGreaterThan/></div>
    </div>
  </div>
</div>
{/* 3rd card */}

<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg " src={win11} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 font-medium mb-3 text-3xl">Windows 11 for business</h5>
      <p class="text-gray-700 text-base mb-4 ">
      Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.
      </p>
      {/* <Link></Link> */}
      <div className='flex  items-center underline text-red-900 font-bold '>Learn More  <FaGreaterThan/></div>
    </div>
  </div>
</div>

{/* card 4th */}
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg " src={mic365} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 font-medium mb-3 text-3xl">Microsoft 365 for business</h5>
      <p class="text-gray-700 text-base mb-4 h-[130px]">
      Stay a step ahead with powerful apps for productivity, connection, and security. Make an appointment with an expert to determine the best solution for your business.
      </p>
      {/* <Link></Link> */}
      <div className='flex  items-center underline text-red-900 font-bold'>Shop Now  <FaGreaterThan/></div>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}

export default Business