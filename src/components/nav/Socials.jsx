import React from "react";

// import icons
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

const Socials = () => {
  return (
    <div className="flex space-x-4 ">
      <ul className="flex space-x-4 ">
        {social.map((item, index) => {
          return (
            <li
              className="flex justify-center items-center text-accent"
              key={index}
            >
              <a className="text-base" href={item.href}>
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Socials;
