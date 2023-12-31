import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

import Image from "../assets/images/placeHolder.png";

export default function AboutUsPage() {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Company Name
              </h2>
              <p className="mb-4 text-accent">
                Established in 2024, we are a company that specializes in ...
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                et, aliquam nemo ratione impedit eum provident velit! Odit est
                accusamus neque atque corporis rerum, illum cumque, cum
                similique tenetur sint.. <br></br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione mollitia consequatur dolor, minima repudiandae nam quis
                placeat accusamus dolores aut veniam voluptates est sed itaque
                unde necessitatibus? Odio, natus. Velit.
              </p>
            </div>
            <Link to="/contact" >
              <button className="btn group btn-md bg-accent hover:bg-secondary-hover transition-all">
                Contact me
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
