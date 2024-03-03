import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import  navigation  from "../../assets/data/navBar";
import Socials from "../nav/Socials";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative" aria-label="Mobile Navigation">
      <motion.div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <RxHamburgerMenu className="w-8 h-8" />
      </motion.div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-tertiary fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <li
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <IoClose className="w-8 h-8" />
        </li>
        <ul className="flex flex-col items-center">
          {navigation.map((item, idx) => (
            <li key={idx} className="mb-8">
              <Link
                to={item.href}
                aria-label={item.name}
                onClick={() => setIsOpen(false)}
                className="text-xl cursor-pointer capitalize"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Socials />
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
