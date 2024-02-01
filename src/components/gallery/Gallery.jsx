import React, { useState, useEffect } from "react";

import GalleryInfo from "./GalleryInfo";

import BathroomOne from "../../assets/projects/bathroom/bathroom_1.png";
import BathroomTwo from "../../assets/projects/bathroom/bathroom_2.png";
import BathroomThree from "../../assets/projects/bathroom/bathroom_3.png";
import BathroomFour from "../../assets/projects/bathroom/bathroom_4.png";
import BathroomFourSmall from "../../assets/projects/bathroom/bathroom_4_small.jpg";
// import BathroomFiveLarge from "../../assets/projects/bathroom/bathroom_5_large.jpg";
// import BathroomFiveSmall from "../../assets/projects/bathroom/bathroom_5_small.jpg";

import KitchenOne from "../../assets/projects/kitchen/kitchen_1_large.jpg";
import KitchenOneSmall from "../../assets/projects/kitchen/kitchen_1_small.jpg";
import KitchenTwo from "../../assets/projects/kitchen/kitchen_2.jpg";
import KitchenTwoSmall from "../../assets/projects/kitchen/kitchen_2small.jpg";

const projectsData = [
  {
    id: "1",
    smallImage: BathroomOne,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "bathroom",
  },
  {
    id: "2",
    smallImage: BathroomTwo,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Bathroom",
  },
  {
    id: "3",
    smallImage: BathroomThree,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Bathroom",
  },
  {
    id: "4",
    smallImage: BathroomFourSmall,
    largeImage: BathroomFour,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Bathroom",
  },
  {
    id: "5",
    smallImage: KitchenOneSmall,
    largeImage: KitchenOne,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Kitchen",
  },
  {
    id: "6",
    smallImage: KitchenTwo,
    largeImage: KitchenTwoSmall,
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Kitchen",
  },
  // {
  //   id: "7",
  //   smallImage: BathroomFiveSmall,
  //   largeImage: BathroomFiveLarge,
  //   name: "Title",
  //   description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   category: "Bathroom",
  // },
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
          {projectsNav.map((item, index) => (
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
          ))}
        </ul>
      </nav>
      <section className="grid gap-y-12 md:grid-cols-2 md:gap-x-6 md:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((project) => (
          <GalleryInfo item={project} key={project.id} />
        ))}
      </section>
    </div>
  );
};

export default Gallery;
