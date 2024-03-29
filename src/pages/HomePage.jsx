import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import Carousel from "../components/carousel/Carousel";
import BannerImage from "../assets/projects/carousel/kitchen_2.webp";
import Image from "../assets/images/TJOD_Logo.webp";

import { Link } from "react-router-dom";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
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
      !formData.address ||
      !formData.phone ||
      !formData.message
    ) {
      alert("All fields must be filled out.");
      return;
    }

    try {
      await emailjs.send(
        "service_v5c8iy8", // replace with your service ID
        "template_z6yv3d7", // replace with your template ID
        formData,
        { publicKey: "gXnCJ306Ekx2TISpY" }
      );

      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        message: "",
      });

      alert("Form submitted successfully!");
      console.log("Form submitted successfully!", formData);
    } catch (error) {
      console.error(error);
      console.error(error.text);
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
        <div className="flex flex-col md:flex-row gap-24 ">
          <img
            className="object-cover h-full w-[250px] mx-auto md:mx-auto rounded-2xl scale-110"
            src={Image}
            alt="logo image"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-3xl lg:text-4xl md:mt-10 font-medium mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:md:block">
                Thomas J. O'Donnell <br /> Home Improvement
              </h2>
              <hr className="mb-3 opacity-35" />
              <p className="mb-8">
                Specializing in full-home restorations and renovations.
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
            <div className="block md:flex gap-8">
              <input
                className="input bg-tertiary rounded mb-8 md:mb-0"
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
            <div className="block md:flex gap-8">
              <input
                className="input bg-tertiary rounded mb-8 md:mb-0"
                type="text"
                name="address"
                placeholder="Your address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <input
                className="input bg-tertiary rounded"
                type="text"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <textarea
              className="textarea bg-tertiary rounded"
              name="message"
              placeholder="Provide a detailed description of what your looking to get done"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button className="btn btn-lg bg-buttons text-black hover:text-paragraph hover:bg-tertiary hover:border-white rounded">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
