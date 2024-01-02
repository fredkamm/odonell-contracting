import React from 'react';

import { Link } from 'react-router-dom';


const navigation = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about us",
    href: "about",
  },
  {
    name: "projects",
    href: "projects",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "contact",
    href: "contact",
  },
];

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-white hover:text-accent cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                className='transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
