import React from 'react'

const TopSellerCard = () => {
  return (
    <div>


        <div className='w-[240px] h-[240px] bg-white shadow-2xl rounded-lg flex flex-col justify-center items-center gap-2'>
           <img className='w-[100px] h-[100px]' src="https://i.ibb.co/ZKJY10y/Ellipse-4.png" alt="" />
            <button className='bg-[#30DE37] w-24 h-8 rounded-md text-white font-medium mt-[-20px]'>Level 2</button>
            <h1 className='text-2xl font-semibold text-[#000000]'>Next Gen BD</h1>
             <p className='text-sm text-[#999999]'>15 Products</p>
        </div>
        
    </div>
  )
}

export default TopSellerCard