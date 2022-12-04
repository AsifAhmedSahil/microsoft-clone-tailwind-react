import React from 'react'
import bg from "../../assets/skillbg.webp"
const SkillsWall = () => {
  return (
    <div className="relative h-[600px] ">
      <img
        src={bg}
        className="sm:absolute inset-0 object-cover w-full h-full "
        alt=""
      />
      <div className="absolute right-0  ">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 mt-10">
                
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Building skills for jobs
              </h2>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
              Since 2020, Microsoft and LinkedIn have helped 80 million people access digital skills. We know there is more to do to ensure every person has access to the technology, skills, and opportunity to thrive in a changing economy.
              </p>
              <button className='px-4 py-2 bg-white text-black mt-5  font-bold  '>Learn What's Next</button>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsWall