import React from 'react'

// imported icons
import { GrRestroom } from "react-icons/gr";
import { GiFamilyHouse, GiWindow, Gi3DStairs } from "react-icons/gi";
import { MdRoofing } from "react-icons/md";

const services = [
    {
      icon: <GiFamilyHouse />,
      name: "Full Home Renovation",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
    },
    {
      icon: <GrRestroom />,
      name: "Bathroom Renovation",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
    },
    {
      icon: <GiWindow />,
      name: "Window Replacement and Installation",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
    },
    {
      icon: <MdRoofing />,
      name: "Roofing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
    },
    {
      icon: <Gi3DStairs />,
      name: "Floor Installation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
    },
    {
      icon: <MdRoofing />,
      name: "Roofing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
    },
  ];

function ServicesPage() {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            Services that we provide
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage