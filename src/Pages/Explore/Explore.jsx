import React from 'react'
import FreeRecoursesCard from '../Free Recourses/FreeRecoursesCard'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

const Explore = () => {
  return (
    <div className=' w-full bg-[#ededed] p-2 h-full max-h-screen overflow-hidden'>
    <div className='xl:flex xl:flex-row xl:gap-6 flex-col px-2 py-2 relative'>
      <div>
        <img src="https://i.ibb.co/gr1rK7j/Rectangle-9.png" alt="" />
      </div>

      <div>
        <img src="https://i.ibb.co/r6Bx6Fn/Rectangle-10.png" alt="" />
      </div>


    </div>

    <div className='flex justify-between '>
      <span className='absolute top-[244px] hidden xl:block'><MdOutlineArrowBackIos size={25} className='w-8 h-8 rounded-full bg-white p-2 shadow-2xl cursor-pointer ' />
      </span>
      
      <span className='absolute top-[244px] right-3 hidden xl:block'><MdOutlineArrowForwardIos size={25} className='w-8 h-8 rounded-full bg-white p-2 shadow-2xl cursor-pointer' /></span>
    </div>


     <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-6'>
      <FreeRecoursesCard/>
      <FreeRecoursesCard/>
      <FreeRecoursesCard/>
     </div>


  </div>
  )
}

export default Explore