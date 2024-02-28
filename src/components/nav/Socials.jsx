import React from "react";
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
    href: "https://www.instagram.com/linktoinstagram/",
  },
];

const Socials = () => {
  return (
    <ul className="flex space-x-4 " aria-label="Social Media Links">
      {social.map((item, index) => (
        <li className="flex justify-center items-center" key={index}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:text-accent-hover transition-all duration-300"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
