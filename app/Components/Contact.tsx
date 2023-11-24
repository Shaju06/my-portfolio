'use client'

import React from 'react'
import {motion} from 'framer-motion'
import SubmitBtn from './SubmitButton'


const Contact = () => {

    return (
        <motion.section id='contact-us' className='text-center mt-6  min-h-[500px]'>
        <h1 className='text-[24px] border-b-4 border-blue-600 inline-block pb-1 mb-20'>Contact us</h1>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>
       <form  
        className='flex flex-col justify-center mt-10'
      >
        <input 
        type='text' 
        className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        placeholder='Type subject'  />
         <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-dark-Primary dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
       </form>
    </motion.section>
    )
}

export default Contact