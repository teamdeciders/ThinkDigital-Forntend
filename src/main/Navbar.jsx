import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import {
  BsChatRightQuoteFill,
  BsFillSunFill,
  BsFillCartCheckFill,
  BsFillMoonFill,
} from "react-icons/bs";
import { MdExplore, MdSettings, MdOutlineHelp } from "react-icons/md";
import { GiShop } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { FaGifts, FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useColorMode } from "@chakra-ui/react";
import Singup from "../Pages/Authentication.jsx/Singup";
const Navbar = ({ Outlet }) => {
  const location = useLocation();
  const [isopen, setisOpen] = useState(true);
  //dark theme
  const [themeMode, setThemeMode] = useState("light");
  const { toggleColorMode } = useColorMode()

  //craete acount
  const [openModal, setOpenModal] = useState(false)


  return (
    // Navbar and Sidevar Here
    <div className="relative">
      {/* Navbar for mobile */}
      <div className=" p-2 bottom-[73px] absolute shadow-sm border-t-2 bg-white w-full sm:hidden md:hidden lg:hidden xl:hidden">
        <div className="grid grid-cols-5 gap-3">
          <Link
            to={"/"}
            className={`bg-gray-100 hover:scale-105 duration-500 h-10 flex items-center justify-center ${location.pathname === "/"
              ? "text-black bg-gray-100 "
              : "text-[#766565] bg-white-100"
              }`}
          >
            <AiFillHome className="text-2xl" />
          </Link>
          <Link
            to={"/explore"}
            className={`bg-gray-100 hover:scale-105 duration-500 h-10 flex items-center justify-center ${location.pathname === "/explore"
              ? "text-black bg-gray-100 "
              : "text-[#766565] bg-white-100"
              }`}
          >
            <MdExplore className="text-2xl" />
          </Link>
          <Link
            to={"/popular-products"}
            className={`bg-gray-100 hover:scale-105 duration-500 h-10 flex items-center justify-center ${location.pathname === "/popular-products"
              ? "text-black bg-gray-100 "
              : "text-[#766565] bg-white-100"
              }`}
          >
            <GiShop className="text-2xl" />
          </Link>
          <Link
            to={"/top-sellers"}
            className={`bg-gray-100 hover:scale-105 duration-500 h-10 flex items-center justify-center ${location.pathname === "/top-sellers"
              ? "text-black bg-gray-100 "
              : "text-[#766565] bg-white-100"
              }`}
          >
            <HiUsers className="text-2xl" />
          </Link>
          <Link
            to={"/free-recourses"}
            className={`bg-gray-100 hover:scale-105 duration-500 h-10 flex items-center justify-center ${location.pathname === "/free-recourses"
              ? "text-black bg-gray-100 "
              : "text-[#766565] bg-white-100"
              }`}
          >
            <FaGifts className="text-2xl" />
          </Link>
        </div>
      </div>
      {/* Navabr */}
      <div className="py-4 px-2 bg-white shadow-sm flex items-center">
        <RiMenu2Line size={70}
          onClick={() => setisOpen(!isopen)}
          className=" mr-5 cursor-pointer xs:hidden  xl:flex "
        />
        <div className="flex gap-2 w-full max-w-7xl">
          <img className="w-10" src={logo} alt="" />
          <h3 className="text-2xl font-bold text-violet-400 text-bold ">
            Bluefy
          </h3>
        </div>
        <div className="w-full flex items-center justify-between gap-8 px-4">
          <div className="relative">
            <input
              className="bg-white shadow-sm border border-gray-100 sm:hidden xs:hidden rounded-md h-10 px-2 w-96 focus:outline-none"
              type="text"
              placeholder="Search"
            />
            <span className="xl:block hidden absolute top-0 right-0   bg-[#FFF2F2] rounded-tl-2xl cursor-pointer"><BiSearch className="w-12 h-10 text-[#5430E4] flex justify-center items-center p-2" /></span>
          </div>

          <div className="flex gap-8 items-center cursor-pointer">
            <div onClick={toggleColorMode}>
              {themeMode == "light" ? (
                <BsFillMoonFill
                  onClick={() => setThemeMode("dark")}
                  className="text-2xl text-[#766565]"
                />
              ) : (
                <BsFillSunFill
                  onClick={() => setThemeMode("light")}
                  className="text-2xl text-[#766565]"
                />
              )}
            </div>

            <div className="relative">

              <BsFillCartCheckFill
                className="text-2xl text-[#766565]"
              />

              <p className=" absolute top-[-6px] left-3 bg-gradient-to-r from-[#C887E4] to-[#A13BCD] h-[19px] w-[18px] rounded-full"><span className=" text-white flex justify-center items-center text-sm">0</span></p>

            </div>
            <div className="xs:hidden  xl:flex ">
              <Link className="block min-w-max px-2 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" to={'/become-a-seller'}>Become a Seller</Link>

            </div>


            {/* create acount for modal */}
            <div>
              {openModal && <Singup setOpenModal={setOpenModal} />}

              <FaUserCircle onClick={() => setOpenModal(true)}
                className="text-2xl text-[#a77f7f]"
              />

            </div>



          </div>
        </div>
      </div>
      {/* Sidebar Hear */}
      <div className="flex">
        {isopen && (
          <div
            className={`w-2/12 transition ease-in-out duration-500 min-w-max px-2 bg-blue min-h-screen border-r-2 flex flex-col xs:hidden `}
          >
            <div className="flex flex-col gap-2">
              <Link
                to={"/"}
                className={`w-full  h-14 flex items-center min-w-max px-2 pl-4 gap-4 ${location.pathname === "/"
                  ? "text-black bg-gray-100 "
                  : "text-[#766565] bg-white-100"
                  }`}
              >
                <AiFillHome className="text-2xl" />
                Home
              </Link>
              <Link
                to={"/explore"}
                className={`w-full  h-14 flex items-center min-w-max px-2 pl-4 gap-4 ${location.pathname === "/explore"
                  ? "text-black bg-gray-100 "
                  : "text-[#766565] bg-white-100"
                  }`}
              >
                <MdExplore className="text-2xl" />
                Explore
              </Link>
              <Link
                to={"/popular-products"}
                className={`w-full  h-14 flex items-center min-w-max px-2 pl-4 gap-4 ${location.pathname === "/popular-products"
                  ? "text-black bg-gray-100 "
                  : "text-[#766565] bg-white-100"
                  }`}
              >
                <GiShop className="text-2xl" />
                Popular Products
              </Link>
              <Link
                to={"/top-sellers"}
                className={`w-full  h-14 flex items-center min-w-max px-2 pl-4 gap-4 ${location.pathname === "/top-sellers"
                  ? "text-black bg-gray-100 "
                  : "text-[#766565] bg-white-100"
                  }`}
              >
                <HiUsers className="text-2xl" />
                Top Sellers
              </Link>
              <Link
                to={"/free-recourses"}
                className={`w-full  h-14 flex items-center min-w-max px-2 pl-4 gap-4 ${location.pathname === "/free-recourses"
                  ? "text-black bg-gray-100 "
                  : "text-[#766565] bg-white-100"
                  }`}
              >
                <FaGifts className="text-2xl" />
                Free Resources
              </Link>

              <Link
                to={"/contactpage"}
                className={`w-full  h-14 flex items-center min-w-max px-2 pl-4 gap-4 ${location.pathname === "/contactpage"
                  ? "text-black bg-gray-100 "
                  : "text-[#766565] bg-white-100"
                  }`}
              >
                <BsChatRightQuoteFill className="text-2xl" />
                Contact Us
              </Link>
            </div>
            <div className="mt-20">
              <Link
                to={"/sttings"}
                className={`w-full  h-14 flex items-center min-w-max px-2 pl-4 gap-4 ${location.pathname === "/sttings"
                  ? "text-black bg-gray-100 "
                  : "text-[#766565] bg-white-100"
                  }`}
              >
                <MdSettings className="text-2xl" />
                Settings
              </Link>
              <Link
                to={"/help"}
                className={`w-full  h-14 flex items-center min-w-max px-2 pl-4 gap-4 ${location.pathname === "/help"
                  ? "text-black bg-gray-100 "
                  : "text-[#766565] bg-white-100"
                  }`}
              >
                <MdOutlineHelp className="text-2xl" />
                Help
              </Link>
            </div>
            <div className="bg-gray-50 mt-6 h-full w-full border-t-2 text-xs justify-center  ">
              <div className="flex gap-3 mt-5 w-full justify-center">
                <Link to={"/terms"}>Terms</Link>
                <Link to={"/privacy"}>Privacy</Link>
                <Link to={"/helps"}>Help</Link>
              </div>
              <h2 className="text-center mt-2 text-xs">
                Copyright 2023 By Bluefy
              </h2>
            </div>
          </div>
        )}
        {/* Outlet Here */}

        <div
          className={`min-h-screen border-r-2 ${!isopen ? "w-full" : "w-full"}`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
