import React, { useState, useEffect } from "react";

import GalleryInfo from "./GalleryInfo";

import Image from "../../assets/images/placeHolder.png";
import BathroomOne from "../../assets/projects/bathroom_1.png";
import BathroomTwo from "../../assets/projects/bathroom_2.png";
import BathroomThree from "../../assets/projects/bathroom_3.png";
import BathroomFour from "../../assets/projects/bathroom_4.png";

import KitchenOne from "../../assets/projects/kitchen_1.png";

const projectsData = [
  {
    id: "1",
    image: BathroomOne,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "bathroom",
  },
  {
    id: "2",
    image: BathroomTwo,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Bathroom",
  },
  {
    id: "3",
    image: BathroomThree,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Bathroom",
  },
  {
    id: "4",
    image: BathroomFour,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Bathroom",
  },
  {
    id: "5",
    image: KitchenOne,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Kitchen",
  },
  {
    id: "6",
    image: Image,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Decks",
  },
];

const projectsNav = [
  {
    name: "bathroom",
  },
  {
    name: "kitchen",
  },
  {
    name: "painting",
  },
  {
    name: "stairs&decks",
  },
  {
    name: "doors&windows",
  },
];

const Gallery = () => {
  const [item, setItem] = useState({ name: "bathroom" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

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
  };

  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <section className="grid gap-y-12 md:grid-cols-2 md:gap-x-6 md:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <GalleryInfo item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Gallery;
