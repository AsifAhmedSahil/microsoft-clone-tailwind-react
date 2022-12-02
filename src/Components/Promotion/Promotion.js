import React from 'react'
import cyber from "../../assets/cyber.webp"
import xbox from "../../assets/xbox.webp"
import accosories from "../../assets/accosories.webp"
import bag from "../../assets/shopbag.webp"
import micro365 from "../../assets/micro365.webp"

const Promotion = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center mx-4 my-10 mt-[100px] items-center'>
        <div className='p-4 mx-4 my-3 space-x-2 '>
            <div className='flex items-center justify-center flex-col'>
            <img   src={cyber} alt="" />
            <span>Cyber Week deals: Surface</span>
            </div>
            
        </div>
        <div className='p-4 mx-4'>
            <div className='flex items-center justify-center flex-col'>
            <img src={xbox} alt="" />
            <span>Cyber Week deals: Xbox games and more</span>
            </div>
        </div>
        <div className='p-4 mx-4'>
            <div className='flex items-center justify-center flex-col'>
            <img src={accosories} alt="" />
            <span>Cyber Week deals: Accessories</span>
            </div>
        </div>
        <div className='p-4 mx-4'>
            <div  className='flex items-center justify-center flex-col'>
            <img src={bag} alt="" />
            <span>Shop Business deals</span>
            </div>
        </div>
        <div className='p-4 mx-4'>
            <div   className='flex items-center justify-center flex-col'>
            <img src={micro365} alt="" />
            <span>Choose your Microsoft 365</span>
            </div>
        </div>
        
    </div>
  )
}

export default Promotion