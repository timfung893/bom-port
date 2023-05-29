import React from 'react';
import WomanImg from '../img/about/woman.png'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h:full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 h-full'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt="" />
          </div>
          <div className='flex-1 justify-center items-center pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col lg:items-start'>
            <h1 className='h1'>About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat hic quibusdam dolores doloremque nobis asperiores?</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quaerat dicta vitae quia minima. Saepe provident obcaecati magni esse quos!</p>
            <br />
            <Link to={'/porfolio'} className='btn'>View my work</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
