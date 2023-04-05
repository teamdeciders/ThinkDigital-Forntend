import React, { useEffect } from 'react'
import ProductCard from '../../components/child-components/ProductCard';


const Home = () => {

  const notify = () => toast("Wow so easy!");


  return (
    <div className=' w-full  p-2 h-full '>

      <div className="w-full flex flex-wrap gap-4">
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