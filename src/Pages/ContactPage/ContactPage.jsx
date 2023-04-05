import React from 'react'
import ContactForm from './ContactForm'

const ContactPage = () => {
  return (
    <div className='w-full bg-[#ededed] p-2 h-full max-h-screen overflow-hidden'>
      
        <div className='flex flex-col  items-center gap-1 mt-1'>
          <h1 className='text-2xl font-bold text-[#000000]'>Need help? Contact us</h1>
          <p className='text-base text-[#000000]'>Looking for help? Drop your contact details here</p>
        </div>

         <div className='mt-6'>
           <ContactForm/>
         </div>
      
      
      
      </div>
  )
}

export default ContactPage