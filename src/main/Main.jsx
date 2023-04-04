import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='h-full max-h-screen overflow-hidden'>
        <Navbar Outlet={Outlet} />
        
    </div>
  )
}

export default Main