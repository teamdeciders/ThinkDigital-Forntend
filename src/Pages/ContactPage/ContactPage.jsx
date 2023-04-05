import React from 'react'
import ContactForm from './ContactForm'

const ContactPage = () => {
  return (
    <div className='w-full  p-2 '>
      
        <div className='flex flex-col  items-center gap-1 mt-1 '>
          <h1 className='text-2xl  dark:text-white'>Need help? Contact us</h1>
          <p className='text-base dark:text-white'>Looking for help? Drop your contact details here</p>
        </div>

         <div className='mt-6 '>
           <ContactForm/>
         </div>
      
      
      
      </div>
  )
}

export default ContactPage