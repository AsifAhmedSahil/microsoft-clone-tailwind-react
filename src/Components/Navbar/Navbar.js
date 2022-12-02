import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center p-4'>
        <div className='flex justify-center items-center md:order-2'>
            <div className='hamburgur p-4 inline-block cursor-pointer md:hidden'>
                <div className='line h-0.5 w-6 my-1 bg-black '></div>
                <div className='line h-0.5 w-6 my-1 bg-black '></div>
                <div className='line h-0.5 w-6 my-1 bg-black '></div>
            </div>
            <div className='search'>Search</div>
        </div>

        <div className='logo text-center md:order-1'>Microsoft</div>
        <div className='cart text-center md:order-3'>cart Account</div>
        
    </div>
  )
}

export default Navbar