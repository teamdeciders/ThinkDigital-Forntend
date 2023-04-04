import React from 'react'
import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi';
import {AiFillHome  } from 'react-icons/ai';
import { BsChatRightQuoteFill } from 'react-icons/bs';
import {MdExplore , MdSettings ,MdOutlineHelp } from 'react-icons/md';
import {GiShop  } from 'react-icons/gi';
import {HiUsers  } from 'react-icons/hi';
import { FaGifts } from 'react-icons/fa';

const Navbar = ({Outlet}) => {
const location = useLocation()
  return (
    // Navbar and Sidevar Here
    <div>
      {/* Navabr */}
      <div className='py-4 px-2 bg-white shadow-sm flex items-center '>
        <FiMenu className='text-2xl'/>
     <div className="flex gap-2 mx-4">
      <img className='w-10' src={logo} alt="" />
      <h3 className='text-2xl font-bold text-violet-400 text-bold'>Bluefy</h3>

     </div>
      </div>
      {/* Sidebar Hear */}
      <div className='xs:hidden  xl:flex'>
      <div className='w-2/12 bg-blue min-h-screen border-r-2 flex flex-col '>
        <div className="flex flex-col gap-2">
        <Link to={'/'} className={`w-full  h-14 flex items-center pl-4 gap-4 ${location.pathname === '/' ? 'text-black bg-gray-100 ' : 'text-[#766565] bg-white-100'}`}>
        <AiFillHome className='text-2xl'/>
          Home
        </Link>
        <Link to={'/explore'} className={`w-full  h-14 flex items-center pl-4 gap-4 ${location.pathname === '/explore' ? 'text-black bg-gray-100 ' : 'text-[#766565] bg-white-100'}`}>
        <MdExplore className='text-2xl'/>
          Explore
        </Link>
        <Link to={'/popular-products'} className={`w-full  h-14 flex items-center pl-4 gap-4 ${location.pathname === '/popular-products' ? 'text-black bg-gray-100 ' : 'text-[#766565] bg-white-100'}`}>
        <GiShop className='text-2xl'/>
          Popular Products
        </Link>
        <Link to={'/top-sellers'} className={`w-full  h-14 flex items-center pl-4 gap-4 ${location.pathname === '/top-sellers' ? 'text-black bg-gray-100 ' : 'text-[#766565] bg-white-100'}`}>
        <HiUsers className='text-2xl'/>
          Top Sellers
        </Link>
        <Link to={'/free-recourses'} className={`w-full  h-14 flex items-center pl-4 gap-4 ${location.pathname === '/free-recourses' ? 'text-black bg-gray-100 ' : 'text-[#766565] bg-white-100'}`}>
        <FaGifts className='text-2xl'/>
        Free Resources
        </Link>
       
        <Link to={'/contactpage'} className={`w-full  h-14 flex items-center pl-4 gap-4 ${location.pathname === '/contactpage' ? 'text-black bg-gray-100 ' : 'text-[#766565] bg-white-100'}`}>
        <BsChatRightQuoteFill className='text-2xl'/>
          Contact Us
        </Link>
        </div>
        <div className='mt-20'>
        <Link to={'/sttings'} className={`w-full  h-14 flex items-center pl-4 gap-4 ${location.pathname === '/sttings' ? 'text-black bg-gray-100 ' : 'text-[#766565] bg-white-100'}`}>
        <MdSettings className='text-2xl'/>
        Settings
        </Link>
        <Link to={'/help'} className={`w-full  h-14 flex items-center pl-4 gap-4 ${location.pathname === '/help' ? 'text-black bg-gray-100 ' : 'text-[#766565] bg-white-100'}`}>
        <MdOutlineHelp className='text-2xl'/>
        Help
        </Link>
        </div>
        <div className='bg-gray-50 mt-6 h-full w-full border-t-2 text-xs justify-center '>
          <div className="flex gap-3 mt-5 w-full justify-center">
            <Link to={'/terms'}>Terms</Link>
            <Link to={'/privacy'}>Privacy</Link>
            <Link to={'/helps'}>Help</Link>
          </div>
          <h2 className='text-center mt-2 text-xs'>Copyright 2023 By Bluefy</h2>

        </div>
       
      </div>
      {/* Outlet Here */}
      <div className='w-10/12  min-h-screen border-r-2  '>
      <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default Navbar