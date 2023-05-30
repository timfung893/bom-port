import React from 'react';
import WomanImg from '../img/contact/woman.png'
import { motion } from 'framer-motion';
import { transition1 } from '../transitions'

const Contact = () => {
  return <motion.section 
  initial={{ opacity: 0, y: '-80%' }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: '-80%' }}
  transition={transition1}
  className='section bg-white'>
    <div className="container mx-auto h-full">
      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
        <div className='hidden lg:flex absolute bottom-0 left-0 right-0 top-72 -z-10'></div>
        <div className='lg:flex-1 lg:pt-32 px-4'>
          <h1 className='h1'>Contact me</h1>
          <p className='mb-12'>I would love to get suggestions from you.</p>
          <form className='flex flex-col gap-y-4' action="">
            <div className='flex gap-x-10'>
              <input 
              className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3' 
              placeholder='Your name' 
              type="text" />
              <input 
              className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3' 
              placeholder='Your email address' 
              type="text" />
            </div>
            <div className='flex gap-x-10'>
              <input 
              className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3' 
              placeholder='Your message' 
              type="text" />
            </div>

            <button className='btn mb-[30px] mx-auto'>Send</button>
          </form>
        </div>
        <div className='lg:flex-1'>
          <img className='bg-transparent' src={WomanImg} alt="" />
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Contact;
