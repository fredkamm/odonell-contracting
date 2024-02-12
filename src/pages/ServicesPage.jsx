import React from "react";

// imported icons
import { GrRestroom } from "react-icons/gr";
import {
  GiFamilyHouse,
  GiWindow,
  Gi3DStairs,
  GiHomeGarage,
  GiPaintRoller,
} from "react-icons/gi";
import { MdRoofing } from "react-icons/md";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbHomePlus, TbAirConditioning } from "react-icons/tb";
import { PiPottedPlantBold } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";

const services = [
  {
    icon: <GiFamilyHouse />,
    name: "Full-Home Renovation",
    description:
      "Embark on a comprehensive renovation journey to transform your entire home. Addressing multiple areas and aspects, our whole-house renovation services create a cohesive and modern living space",
  },
  {
    icon: <GrRestroom />,
    name: "Bathroom Renovation",
    description:
      "Transform your bathroom with a comprehensive renovation, including upgraded fixtures, modern tiles, and a refreshed plumbing system. We can install new showers, bathtubs, and stylish vanities to enhance both functionality and aesthetics.",
  },
  {
    icon: <CgSmartHomeRefrigerator />,
    name: "Kitchen Remodeling",
    description:
      "Elevate your kitchen with a remodel that includes cabinet installation or refinishing, upgraded counter-tops, modern appliances, and new flooring. Achieve a functional and visually appealing space for cooking and entertaining.",
  },
  {
    icon: <GiWindow />,
    name: "Window and Door Installation/Replacement",
    description:
      "Upgrade your home's energy efficiency and curb appeal by installing new, high-quality windows and doors. Whether you're looking to replace or upgrade existing features, we offer professional installation services to enhance both form and function.",
  },
  {
    icon: <AiOutlineHome />,
    name: "Home Additions",
    description:
      "Increase your home's living space by adding new rooms or expanding existing ones. Our home addition services seamlessly integrate with your current structure, providing a tailored solution to meet your needs.",
  },
  {
    icon: <MdRoofing />,
    name: "Roofing Services",
    description:
      "Ensure the protection and longevity of your home with our roofing services. Whether you need repairs or a full replacement, our team specializes in high-quality roofing materials and expert installation for a secure and durable roof.",
  },
  {
    icon: <Gi3DStairs />,
    name: "Floor Installation",
    description:
      "Transform your living spaces with our flooring installation services. Choose from hardwood, laminate, tile, or carpet to achieve the perfect blend of comfort and style throughout your home.",
  },
  {
    icon: <GiPaintRoller />,
    name: "Interior and Exterior Painting",
    description:
      "Revitalize your home with a fresh coat of paint. Our painting services cover both interior and exterior surfaces, creating a cohesive and stylish look throughout. Choose from a wide range of colors and finishes to suit your taste.",
  },
  {
    icon: <TbHomePlus />,
    name: "Deck and Patio Construction",
    description:
      "Expand your living space into the outdoors with a beautifully crafted deck or patio. Our construction services create inviting and functional spaces for relaxation, entertainment, and outdoor gatherings.",
  },
  {
    icon: <GiHomeGarage />,
    name: "Garage Renovation",
    description:
      "Repurpose or upgrade your garage to serve as additional living space. Our renovation services can transform your garage into a home gym, office, or guest suite, enhancing both functionality and value.",
  },
  {
    icon: <TbAirConditioning />,
    name: "HVAC System Installation or Upgrade",
    description:
      "Ensure year-round comfort with our HVAC system installation or upgrade services. From installing new units to upgrading existing systems, we provide efficient and effective climate control solutions for your home.",
  },
  {
    icon: <PiPottedPlantBold />,
    name: "Landscaping and Outdoor Renovation",
    description:
      "Elevate your outdoor living experience with our landscaping and renovation services. From patios and walkways to lush landscaping, we create inviting outdoor spaces that complement your home.",
  },
];

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
                <h4 className="text-xl font-medium mb-2">{name}</h4>
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
