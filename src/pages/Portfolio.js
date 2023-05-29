import React from 'react';
import img1 from '../img/portfolio/1.png';
import img2 from '../img/portfolio/2.png';
import img3 from '../img/portfolio/3.png';
import img4 from '../img/portfolio/4.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return <section className='section'>
    <div className="container mx-auto h-full relative">
      <div className='flex flex-col lg:flex-row h:full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-36 pt-24 pb-8 h-full'>
        <div className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portfolio</h1>
          <p className='mb-12 max-w-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo optio autem, rerum consequatur beatae repellat ex tempore, soluta, doloribus veritatis eos temporibus dolor laudantium numquam illo? Harum nostrum voluptate quo!</p>
          <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire me</Link>
        </div>
        <div className='grid grid-cols-2 lg:gap-2'>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={img1} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt="" />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={img2} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt="" />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={img3} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt="" />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={img4} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt="" />
          </div>

        </div>
      </div>

    </div>
  </section>;
};

export default Portfolio;
