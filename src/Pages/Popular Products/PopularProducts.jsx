import React from 'react'
import ProductCard from '../../components/child-components/ProductCard'

const PopularProducts = () => {
  return (
    <div className='w-full   p-2 h-full '>
     <div className="w-full grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      </div>
  )
}

export default PopularProducts