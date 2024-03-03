import React from "react";
import { Link } from "react-router-dom";

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

export default function Footer() {
  return (
    <footer className="bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col p-3 md:flex-row space-y-6 lg:space-y-3 items-center justify-around md:space-y-1">
          <div className="flex flex-col items-center">
            <p>(610) 348-4448</p>
            <p>tjodhomeimprovement@gmail.com</p>
            <p>Bucks & Montgomery County</p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row space-x-6 items-center justify-center">
              {social.map((item, index) => {
                const { href, icon, label } = item;
                return (
                  <Link
                    to={href}
                    aria-label={label}
                    className="text-accent text-base"
                    key={index}
                  >
                    {icon}
                  </Link>
                );
              })}
            </div>
            <p className="text-paragraph opacity-80 text-[15px] pt-3">
              &copy; 2024 <b>All Rights Reserved</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
