import React from 'react'
import TitleCard from './TitleCardForProduct'

function ProductCard() {
    return (
        <div className='bg-white max-w-max rounded-md shadow-sm p-2'>
            <img className="w-[280px] h-[180px] bg-blue-200" src='https://pixer-react-shop.vercel.app/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F394%2Fconversions%2FRectangle-773-thumbnail.jpg&w=3840&q=100' alt="" />
            <TitleCard/>
        </div>
    )
}

export default ProductCard
