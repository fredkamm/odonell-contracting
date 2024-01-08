import React, { useState, useEffect } from 'react';
// import Logo from '../../assets/images/logo(white).png';
import Nav from "../nav/Nav";
import Socials from "../nav/Socials";
import NavMobile from "../nav/NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'bg-tertiary h-28'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href=''>
          {/* <img className='h-[100px]' src={Logo} alt='' /> */}
        </a>
        {/* nav */}
        <div className='hidden md:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden md:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='md:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
