import React, { useState } from "react";

import Carousel from "../components/carousel/Carousel";
import BannerImage from "../assets/images/banner.png";
import Image from "../assets/images/odonnell_logo.png";

import { Link } from "react-router-dom";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("All fields must be filled out.");
      return;
    }

    try {
      const response = await fetch("getformlinkhere", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <>
      <section className="relative mt-10 max-w-[1400px] w-full m-auto">
        <img className="h-[500px]" src={BannerImage} alt="banner" />
        <Link
          className="flex justify-center p-4 bg-tertiary text-white"
          to="/Contact"
        >
          Contact Us
        </Link>
      </section>
      <section className="container mx-auto my-[200px]">
        <div className="flex flex-col md:flex-row gap-24">
          <img
            className="object-cover h-full w-[250px] mx-auto md:mx-auto rounded-2xl scale-110"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-medium md:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:md:block">
                Thomas J. O'Donnel <br/> Home Improvement
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
      <section className="section my-[200px]">
        <div className="container mx-auto mt-5">
          <div className="flex flex-col items-center text-center mb-[50px]">
            <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
              Contact Us
            </h2>
          </div>
          <form
            className="space-y-8 w-full max-w-[780px p-8 mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-8">
              <input
                className="input bg-tertiary rounded"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                className="input bg-tertiary rounded"
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              className="input bg-tertiary rounded"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <textarea
              className="textarea bg-tertiary rounded"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button className="btn btn-lg bg-buttons hover:bg-tertiary hover:border-white rounded">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
