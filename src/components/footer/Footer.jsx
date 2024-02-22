import React from "react";
import { Link } from 'react-router-dom';

import Logo from "../../assets/images/url_logo.png";

import { FaFacebook, FaInstagram } from "react-icons/fa";

const social = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/TJODHomeImprovement/",
  },
  {
    icon: <FaInstagram />,
    href: "linktoinstagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col p-3 md:flex-row space-y-6 lg:space-y-3 items-center justify-around md:space-y-1">
          <div className="flex flex-col items-center">
            <p>(215) 000-0000</p>
            <p>tjodhomeimprovement@gmail.com</p>
            <p>Bucks County, PA</p>
          </div>
          {/* <div>
            <img className="max-h-[55px] max-w-[51px]" src={Logo} alt="" />
          </div> */}
          <div className="flex flex-col">
            <div className="flex flex-row space-x-6 items-center justify-center">
              {social.map((item, index) => {
                const { href, icon } = item;
                return (
                  <Link to={href} className="text-accent text-base"  key={index}>
                    {icon}
                  </Link>
                );
              })}
            </div>
            <p className="text-paragraph opacity-80 text-[15px] pt-3">
              &copy; 2024 copyright <b>Fred Kamm</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
