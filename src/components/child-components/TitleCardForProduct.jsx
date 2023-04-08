import React from 'react'

function TitleCard() {
    return (
        <div className='max-w-[397px]'>
            <div className='mt-2 flex justify-between items-center'>
                <div className='flex gap-2'>
                   <span> <img className='w-12 h-12' src="https://i.ibb.co/PggLV9Q/Rectangle-6.png" alt="" /></span>
                    <span>
                        <p className='text-base dark:text-white font-medium'>News Website Template.</p>
                    <p className='text-sm dark:text-white'>Next GEN BD</p></span>
                </div>

                 <div>
                    <button className='w-20 h-8 rounded-full mx-auto font-semibold bg-[#D9D9D9] dark:text-white'>Free</button>
                 </div>
            </div>
        </div>
    )
}

export default TitleCard
