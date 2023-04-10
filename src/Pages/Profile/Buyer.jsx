import { Divider } from "@chakra-ui/react";
import React from "react";

const Buyer = () => {
  return (
    <div className="w-full p-2 h-full">
      <section className="grid grid-cols-4 gap-5 justify-between items-center m-10 bg-slate-200 text-black rounded p-4">
        <div className="flex justify-center items-center col-span-1 py-6 ">
          <div className="rounded-full h-48 w-48 flex justify-center items-center bg-black ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTF-_B6vTspG-U1l8rlkYDe7vBosCJp4U95RpYi3mb&s"
              alt=""
              className="rounded-full w-44 h-44 border-4 border-black"
            />
          </div>
        </div>
        <div className="col-span-3 p-4">
          <h1 className="font-bold text-[39px] py-3">Abdul Lase Akbar</h1>
          <p className="text-[25px]">
            The currency code for Takas is BDT, and the currency symbol is ৳.
            Below, you'll find Bangladeshi Taka rates and a currency converter.
          </p>
          <h6 className="text-2xl font-semibold"> 9 Following</h6>
        </div>
      </section>
      <section className="bg-slate-200 m-10 rounded p-4">
        <div className="flex justify-between">
          <h1 className="text-black font-bold text-3xl p-4">Products</h1>
          <h1 className="text-black font-bold text-3xl p-4">10</h1>
        </div>
        <Divider className="bg-gray-500 rounded" />
        <div className="px-14 py-10">
          <div className="grid grid-cols-4 gap-10 justify-center items-center">
            {/* {Product.map(pro => <></>)} */}
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
              className="w-[326px] h-[226px] rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
              className="w-[326px] h-[226px] rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
              className="w-[326px] h-[226px] rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
              className="w-[326px] h-[226px] rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
              className="w-[326px] h-[226px] rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
              className="w-[326px] h-[226px] rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
              className="w-[326px] h-[226px] rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
              className="w-[326px] h-[226px] rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buyer;
