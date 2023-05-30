import React from 'react';
import WomanImg from '../img/about/woman.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions'

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h:full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 h-full'>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1} 
          className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={transition1}
            src={WomanImg} alt="" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
          className='flex-1 justify-center items-center pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col lg:items-start'>
            <h1 className='h1'>About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat hic quibusdam dolores doloremque nobis asperiores?</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quaerat dicta vitae quia minima. Saepe provident obcaecati magni esse quos!</p>
            <br />
            <Link to={'/porfolio'} className='btn'>View my work</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
