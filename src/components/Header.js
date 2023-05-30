import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed w-full flex items-center z-30 px-[30px] lg:px-[100px] h-[100px] lh:h-[140px]'>
      <div className='flex lg:flex-row lg:items-center w-full  justify-between'>
        {/* <Link>
          <img src={Logo} alt="" />
        </Link> */}
        <h3 className='h3 font-bold'>Bom Photos</h3>
        <nav className='hidden xl:flex gap-x-12'>
          <Link to={"/"} 
          className='text-[#696c6d] hover:text-primary transition'>
            Home
          </Link>
          <Link to={"/about"} 
          className='text-[#696c6d] hover:text-primary transition'>
            About
          </Link>
          <Link to={"/portfolio"} 
          className='text-[#696c6d] hover:text-primary transition'>
            Portfolio
          </Link>
          <Link to={"/contact"} 
          className='text-[#696c6d] hover:text-primary transition'>
            Contact
          </Link>
        </nav>
        <Socials/>
        <MobileNav/>
      </div>
    </header>
  )
};

export default Header;
