import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='h-full '>

      <Navbar Outlet={Outlet} />
      {/* <Footer/> */}


    </div>
  )
}

export default Main