import React from "react";
import Logo from "../../assets/images/url_logo.png";

export default function Footer() {
  return (
    <footer className='bg-tertiary'>
    <div className='container mx-auto'>
      <div className='flex flex-col p-3 md:flex-row space-y-6 lg:space-y-3 items-center justify-around md:space-y-1'>
        {/* <div className='flex space-x-6 items-center justify-center'>
          {social.map((item, index) => {
            const { href, icon } = item;
            return (
              <a className='text-accent text-base' href={href} key={index}>
                {icon}
              </a>
            );
          })}
        </div> */}
        <div>
          <img className='max-h-[55px] max-w-[51px]' src={Logo} alt='' />
        </div>
        <p className='text-paragraph opacity-80 text-[15px]'>
          &copy; 2022 Fred Kamm. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
}
