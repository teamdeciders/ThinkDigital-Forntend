import React from 'react'
import ProductCard from './ProductCard'

function ProductGrid() {
    return (
        <div className='flex flex-wrap flex-shrink gap-6 max-h-screen overflow-y-scroll'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    )
}

export default ProductGrid
