import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Nav from "../nav/Nav";
import Socials from "../nav/Socials";
import NavMobile from "../nav/NavMobile";
import Logo from "../../assets/images/url_logo.png";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-secondary h-20" : "bg-secondary h-28"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link to="/" aria-label="Home">
          <img className="max-h-[55px] max-w-[51px]" src={Logo} alt="logo image" />
        </Link>
        {/* nav */}
        <div className="hidden md:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden md:block">
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className="md:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
