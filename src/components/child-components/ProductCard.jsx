import React from 'react'
import TitleCard from './TitleCardForProduct'
import { useNavigate } from 'react-router-dom'

function ProductCard() {
    const navigate = useNavigate()
    const handleVisit = () => {
        navigate('/product/01')
    }
    return (
        <div >
            <div onClick={() => handleVisit()} className='bg-white max-w-max rounded-md shadow-sm p-2 cursor-pointer'>
                <img className="w-[330px] h-[180px] bg-blue-200" src="https://i.ibb.co/9qVCjyT/image50-thumbnail.webp" alt="" />
            </div>

            <TitleCard/>
        </div>
    )
}

export default ProductCard
