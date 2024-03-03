import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

import GalleryInfo from "./GalleryInfo";
import projectsData from "../../assets/data/galleryImages";
import projectsNav from "../../assets/data/galleryNav";

const Gallery = () => {
  const [item, setItem] = useState({ name: "bathroom" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (item.name) {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-12 max-w-xl mx-auto">
        {item.name && (
          <div className="mt-2 text-xl text-white">
            {" "}
            Currently Viewing:{" "}
            <span className="font-bold capitalize text-primary">
              {item.name}
            </span>
          </div>
        )}
        <div
          onClick={toggleDropdown}
          className="cursor-pointer capitalize m-4 flex items-center justify-center text-tertiary bg-primary rounded-md py-2 px-4 hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out"
        >
          Click here to view more{" "}
          <IoIosArrowDown className="inline-block ml-2" />
        </div>
        {isDropdownOpen && (
          <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white text-tertiary rounded-md shadow-lg">
            {projectsNav.map((item, index) => (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize px-4 py-2`}
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <section className="grid gap-y-12 md:grid-cols-2 md:gap-x-6 md:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((project) => (
          <GalleryInfo item={project} key={project.id} />
        ))}
      </section>
    </div>
  );
};

export default Gallery;
