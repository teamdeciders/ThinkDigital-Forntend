import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { RiMailOpenLine } from 'react-icons/ri'
const ContactForm = () => {
    return (
        <div className=' w-4/5 mx-auto xl:flex'>

            <div className='xl:w-[400px] bg-[#A13BCD] w-full flex flex-col gap-2 px-4 py-6'>
                <h1 className='text-xl font-bold text-white'>Contact Information.</h1>
                <p className='text-sm text-white'>Contact Information.

                    Fill out the form and our team will get back to you within 24 hours.</p>

                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-1'>
                        <span ><CiLocationOn className='text-white' size={35} /></span>
                        <span>
                            <p className='text-[15px] font-medium text-white'>Office Location</p>
                            <p className='text-white text-[10px]'>Dhaka, Bangladesh</p>
                        </span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span ><BsTelephone className='text-white' size={30} /></span>
                        <span>
                            <p className='text-[15px] font-medium text-white'>Call us anytime</p>
                            <p className='text-white text-[10px]'>+8801755429529</p>
                        </span>
                    </div>  <div className='flex items-center gap-1'>
                        <span ><RiMailOpenLine className='text-white' size={30} /></span>
                        <span>
                            <p className='text-[15px] font-medium text-white'>Visit Website</p>
                            <p className='text-white text-[10px]'>www.bluefy.com</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className='w-full   bg-white rounded-l-md shadow p-4'>
                <div className='xl:flex gap-2 w-full'>
                    <div className="mb-5">
                        <label
                            for="name"
                            className="mb-1 block text-base font-medium text-[#07074D]"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="xl:w-[300px] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                     <div className="mb-5">
                        <label
                            for="name"
                            className="mb-1 block text-base font-medium text-[#07074D]"
                        >
                           Email
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Email"
                            className="xl:w-[300px] w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                   
                </div>

                <div className="mb-5">
                    <label
                        for="name"
                        className="mb-1 block text-base font-medium text-[#07074D]"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Email"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>



                <div class="mb-5">
                    <label
                        for="message"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Message
                    </label>
                    <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                </div>

                <button
          className="hover:shadow-form rounded-md bg-[#B05AD6] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Send
        </button>
            </div>

        </div>
    )
}

export default ContactForm