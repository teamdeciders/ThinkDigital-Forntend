import React from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import FreeRecoursesCard from './FreeRecoursesCard'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper";
const FreeRecourses = () => {
  return (
    <div className=' w-full bg-[#ededed] p-2 h-full max-h-screen overflow-hidden'>

<div className="w-full flex justify-center items-center ">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation, Pagination]}
          className="mySwiper h-68 max-w-full grid grid-cols-2 gap-4 py-5"
        >
          <SwiperSlide className=" ">
            <img
              className="bg-cover"
              src="https://i.ibb.co/gr1rK7j/Rectangle-9.png"
            />
          </SwiperSlide>
          <SwiperSlide className=" ">
            <img src="https://i.ibb.co/r6Bx6Fn/Rectangle-10.png" />
          </SwiperSlide>
          <SwiperSlide className=" ">
            <img src="https://i.ibb.co/gr1rK7j/Rectangle-9.png" />
          </SwiperSlide>
          <SwiperSlide className=" ">
            <img src="https://i.ibb.co/r6Bx6Fn/Rectangle-10.png" />
          </SwiperSlide>
          <SwiperSlide className="">
            <img src="https://i.ibb.co/gr1rK7j/Rectangle-9.png" />
          </SwiperSlide>
          <SwiperSlide className=" ">
            <img src="https://i.ibb.co/r6Bx6Fn/Rectangle-10.png" />
          </SwiperSlide>
        </Swiper>
      </div>


       <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-6'>
        <FreeRecoursesCard/>
        <FreeRecoursesCard/>
        <FreeRecoursesCard/>
       </div>


    </div>
  )
}

export default FreeRecourses