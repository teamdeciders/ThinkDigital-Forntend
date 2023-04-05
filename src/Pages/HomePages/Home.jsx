import React, { useEffect } from 'react'
import ProductCard from '../../components/child-components/ProductCard';


const Home = () => {

  const notify = () => toast("Wow so easy!");


  return (
    <div className=' w-full bg-[#ededed] p-2 h-full max-h-screen overflow-hidden'>

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

export default Home