import React from "react";
import { Link, useLocation } from "react-router-dom";
import  navigation  from "../../assets/data/navBar";

const Nav = () => {
  const location = useLocation();

  return (
    <nav aria-label="Main Navigation">
      <div className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => (
          <Link
            key={idx}
            to={item.href}
            aria-label={item.name}
            className={`${
              location.pathname === item.href
                ? "active"
                : " text-white hover:text-accent-hover transition-all duration-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
