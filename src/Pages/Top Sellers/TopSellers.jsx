import React from 'react'
import TopSellerCard from './TopSellerCard'

const TopSellers = () => {
  return (
    <div className=' w-full   p-2 h-full '>
      <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 '>
      <TopSellerCard/>
      <TopSellerCard/>
      <TopSellerCard/>
      <TopSellerCard/>
      <TopSellerCard/>
      <TopSellerCard/>
      <TopSellerCard/>
      <TopSellerCard/>
      </div>

        <div className='flex flex-col justify-center items-center mt-8'>
        <button className='bg-[#B05AD6] w-36 h-14 rounded-lg font-bold text-white'>Load More</button>
        </div>
      </div>
  )
}

export default TopSellers