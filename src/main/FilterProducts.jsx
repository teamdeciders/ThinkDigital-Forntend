import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const FilterProducts = () => {
  return (
    <div className="w-full  p-2 h-full max-h-screen overflow-x-scroll">
      <div className="flex flex-row  items-center gap-4">
        <span className="">
          <button className="bg-[#B86AD9] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            All
          </button>
        </span>
        <span className="">
          <button className="bg-[#E5E5E5] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            Free
          </button>
        </span>
        <span className="">
          <button className="bg-[#E5E5E5] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            Poster
          </button>
        </span>
        <span className="">
          <button className="bg-[#E5E5E5] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            Banner
          </button>
        </span>
        <span className="">
          <button className="bg-[#E5E5E5] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            Conetent
          </button>
        </span>
        <span className="">
          <button className="bg-[#E5E5E5] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            Themes
          </button>
        </span>
        <span className="">
          <button className="bg-[#E5E5E5] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            Themes
          </button>
        </span>
        <span className="">
          <button className="bg-[#E5E5E5] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            Themes
          </button>
        </span>{" "}
        <span className="">
          <button className="bg-[#E5E5E5] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            Themes
          </button>
        </span>
        <span className="">
          <button className="bg-[#E5E5E5] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            Themes
          </button>
        </span>
        <span className="">
          <button className="bg-[#E5E5E5] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            Themes
          </button>
        </span>
        <span className="">
          <button className="bg-[#E5E5E5] w-[100px] h-[40px] rounded-full mx-auto text-[#696262] font-medium ">
            Themes
          </button>
        </span>
        <span>
          <MdArrowForwardIos size={30} />
        </span>
      </div>
    </div>
  );
};

export default FilterProducts;
