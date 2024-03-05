import React from "react";
import { Link } from "react-router-dom";

import Image from "../assets/images/TJOD_Logo.webp";

export default function AboutUsPage() {
  return (
    <section className="section bg-secondary my-[50px]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl scale-105"
            src={Image}
            alt="Thomas J. O'Donnel Home Improvement Logo"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Thomas J. O'Donnell <br /> Home Improvement
              </h2>
              <p className="mb-4 text-accent">
                Established in 2000, we are a company that specializes in
                full-home restorations and renovations.
              </p>
              <hr className="mb-8 opacity-35" />
              <p className="mb-4 md:items-start md:text-left">
                Welcome to Thomas J. Odonnell Home Improvement, where we turn
                your home renovation dreams into reality. As a top provider of comprehensive renovation and restoration services, we take pride in our commitment to excellence and attention to detail. Whether you're envisioning a modern kitchen, a cozy deck, or a complete overhaul of your living space, our experienced team is here to guide you through every step of the process. 
                </p>
                <p className="mb-8 md:items-start md:text-left">
                With a focus on transparent communication and collaborative planning, we work closely with you to ensure your project aligns seamlessly with your goals and budget. Ypu can trust us to be your reliable partner on the journey to a refreshed and rejuvenated home.
              </p>
            </div>
            <Link to="/contact">
              <button className="btn group btn-md bg-buttons text-black hover:text-paragraph hover:bg-tertiary transition-all rounded">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
