import React, { useEffect } from 'react'
import ProductCard from '../../components/child-components/ProductCard';
import ProductGrid from '../../components/child-components/ProductGrid';


const Home = () => {

  const notify = () => toast("Wow so easy!");


  return (
    <div className=' w-full  p-2 h-full overflow-y-scroll max-h-[100vh] max-w-full '>
     <ProductGrid/>
    </div>
  )
}

export default Home