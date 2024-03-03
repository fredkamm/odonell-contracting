import React from "react";
import services from "../assets/data/servicesData";

function ServicesPage() {
  return (
    <section id="services" className="section bg-secondary">
      <div className="container mx-auto mt-5">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            Services that we provide
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="bg-tertiary p-6 rounded-2xl" key={index}>
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-12 text-[28px]">
                  {icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{name}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
