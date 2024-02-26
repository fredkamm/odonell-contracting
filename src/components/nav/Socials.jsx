import React from "react";
import { Link } from "react-router-dom";

// import icons
import { FaFacebook, FaInstagram } from "react-icons/fa";

const social = [
  {
    icon: <FaFacebook />,
    label: "Facebook",
    href: "https://www.facebook.com/TJODHomeImprovement/",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "linktoinstagram",
  },
];

const Socials = () => {
  return (
    <div className="flex space-x-4 ">
      <ul className="flex space-x-4 ">
        {social.map((item, index) => {
          return (
            <li className="flex justify-center items-center" key={index}>
              <Link
                className="text-base hover:text-accent-hover transition-all duration-300"
                to={item.href}
                aria-label={item.label}
              >
                {item.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Socials;
