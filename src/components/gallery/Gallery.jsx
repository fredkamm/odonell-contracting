import React, { useState, useEffect } from "react";

import Image from "../../assets/images/placeHolder.png";

const projectsData = [
  {
    id: "1",
    image: Image,
    href: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Category 1",
  },
  {
    id: "2",
    image: Image,
    href: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Category 2",
  },
  {
    id: "3",
    image: Image,
    href: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Category 3",
  },
  {
    id: "4",
    image: Image,
    href: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Category 1",
  },
  {
    id: "5",
    image: Image,
    href: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Category 2",
  },
  {
    id: "6",
    image: Image,
    href: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    name: "Title",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Category 3",
  },
];

const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Category 1",
  },
  {
    name: "Category 2",
  },
  {
    name: "Category 3",
  },
];

import GalleryInfo from "./GalleryInfo";

const Gallery = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
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
