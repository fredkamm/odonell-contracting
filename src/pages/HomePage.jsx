import React from "react";

import Carousel from "../components/carousel/Carousel";
import BannerImage from "../assets/images/banner.png";
import Image from "../assets/images/placeHolder.png";

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="relative mt-10">
        <img className="h-[500px]" src={BannerImage} alt="banner" />
        <Link to="/contact">
          <button className="absolute bottom-[1rem] left-[20rem] transform -translate-x-1/2 -translate-y-1/2 bg-buttons hover:bg-tertiary px-8 py-3 rounded">
            Contact Us
          </button>
        </Link>
      </section>
      <section className="container mx-auto my-[100px]">
        <div className="flex flex-col md:flex-row gap-24">
          <img
            className="object-cover h-full w-[250px] md:mx-auto rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-medium md:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:md:block">
                Company Name
              </h2>
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
          </div>
        </div>
      </section>
      <Carousel />
      <h1 className="text-3xl font-bold underline mt-12">
        Contact information
      </h1>
    </>
  );
}
