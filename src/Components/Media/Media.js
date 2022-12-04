import React from 'react'


import { AiOutlineTwitter,AiFillLinkedin,AiFillFacebook } from 'react-icons/ai'


const Media = () => {
  return (
    
        <div className='media max-h-[100px] mt-10  flex items-center'>
        <h2 className="text-3xl"> Follow Microsoft</h2>
    
    <div className=' mx-5 flex'>
        <AiFillFacebook className=' mx-2 ' size={30}/>
        <AiOutlineTwitter className=' mx-2 ' size={30}/>
        <AiFillLinkedin className=' mx-2 ' size={30}/>
    </div>

</div>


   
  )
}

export default Media