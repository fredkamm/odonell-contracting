import React from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about us",
    href: "/about",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "services",
    href: "/services",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => (
          <li className="cursor-pointer" key={idx}>
            <Link
              to={item.href}
              className={`text-white hover:text-accent transition-all duration-300 ${
                location.pathname === item.href ? "text-accent" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
