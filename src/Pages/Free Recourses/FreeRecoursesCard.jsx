import React from 'react'

const FreeRecoursesCard = () => {
    return (
        <div>
            <div className='bg-white max-w-max rounded-md shadow-sm p-2'>
                <img className="w-[380px] h-[180px] bg-blue-200" src="https://i.ibb.co/9cx9Skb/image06-thumbnail-1.png" alt="" />
            </div>

            <div className='mt-2 flex justify-between items-center'>
                <div className='flex gap-2'>
                   <span> <img className='w-12 h-12' src="https://i.ibb.co/PggLV9Q/Rectangle-6.png" alt="" /></span>
                    <span>
                        <p className='text-base text-[#312C2C] font-medium'>News Website Template.</p>
                    <p className='text-sm text-[#4C10CB]'>Next GEN BD</p></span>
                </div>

                 <div>
                    <button className='w-20 h-8 rounded-full mx-auto font-semibold bg-[#D9D9D9] text-[#4C10CB]'>Free</button>
                 </div>
            </div>
        </div>
    )
}

export default FreeRecoursesCard