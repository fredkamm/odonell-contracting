import React, { useState, useEffect } from "react";

import GalleryInfo from "./GalleryInfo";

import BathroomOne from "../../assets/projects/bathroom/bathroom_1.webp";
import BathroomTwo from "../../assets/projects/bathroom/bathroom_2.webp";
import BathroomThree from "../../assets/projects/bathroom/bathroom_3.webp";
import BathroomFour from "../../assets/projects/bathroom/bathroom_4.webp";
import BathroomFive from "../../assets/projects/bathroom/bathroom_5.webp";
import BathroomSix from "../../assets/projects/bathroom/bathroom_6.webp";
import BathroomSeven from "../../assets/projects/bathroom/bathroom_7.webp";
import BathroomEight from "../../assets/projects/bathroom/bathroom_8.webp";
import BathroomNine from "../../assets/projects/bathroom/bathroom_9.webp";

import KitchenOne from "../../assets/projects/kitchen/kitchen_1.webp";
import KitchenTwo from "../../assets/projects/kitchen/kitchen_2.webp";
import KitchenThree from "../../assets/projects/kitchen/kitchen_3.webp";
import KitchenFour from "../../assets/projects/kitchen/kitchen_4.webp";
import KitchenFive from "../../assets/projects/kitchen/kitchen_5.webp";
import KitchenSix from "../../assets/projects/kitchen/kitchen_6.webp";

import WallOneSmall from "../../assets/projects/walls/wall.jpg";
import WallTwo from "../../assets/projects/walls/wall_2.png";
import WallThree from "../../assets/projects/walls/wall_1.webp";

import DeckOne from "../../assets/projects/decks/deck_1.webp";
import DeckTwo from "../../assets/projects/decks/deck_2.webp";

import WindowOne from "../../assets/projects/windows/windows_1.png";
import WindowTwo from "../../assets/projects/windows/windows_2.png";
import WindowThree from "../../assets/projects/windows/windows_3.png";
import WindowFour from "../../assets/projects/windows/windows_4.webp";

import FlooringOne from "../../assets/projects/flooring/flooring_1.webp";
import FlooringTwo from "../../assets/projects/flooring/flooring_2.webp";
import FlooringThree from "../../assets/projects/flooring/flooring_3.webp";

const projectsData = [
  {
    id: 1,
    smallImage: BathroomOne,
    category: "Bathroom",
  },
  {
    id: 2,
    smallImage: BathroomTwo,
    category: "Bathroom",
  },
  {
    id: 3,
    smallImage: BathroomThree,
    category: "Bathroom",
  },
  {
    id: 4,
    smallImage: BathroomFour,
    category: "Bathroom",
  },
  {
    id: 5,
    smallImage: BathroomFive,
    category: "Bathroom",
  },
  {
    id: 6,
    smallImage: BathroomSix,
    category: "Bathroom",
  },
  {
    id: 7,
    smallImage: BathroomSeven,
    category: "Bathroom",
  },
  {
    id: 8,
    smallImage: BathroomEight,
    category: "Bathroom",
  },
  {
    id: 9,
    smallImage: BathroomNine,
    category: "Bathroom",
  },
  {
    id: 10,
    smallImage: KitchenOne,
    category: "Kitchen",
  },
  {
    id: 11,
    smallImage: KitchenTwo,
    category: "Kitchen",
  },
  {
    id: 12,
    smallImage: KitchenThree,
    category: "Kitchen",
  },
  {
    id: 13,
    smallImage: KitchenFour,
    category: "Kitchen",
  },
  {
    id: 14,
    smallImage: KitchenFive,
    category: "Kitchen",
  },
  {
    id: 15,
    smallImage: KitchenSix,
    category: "Kitchen",
  },
  {
    id: 16,
    smallImage: WindowOne,
    category: "doors&windows",
  },
  {
    id: 17,
    smallImage: WindowTwo,
    category: "doors&windows",
  },
  {
    id: 18,
    smallImage: WindowThree,
    category: "doors&windows",
  },
  {
    id: 19,
    smallImage: WindowFour,
    category: "doors&windows",
  },
  {
    id: 20,
    smallImage: WindowFour,
    category: "doors&windows",
  },
  {
    id: 21,
    smallImage: WindowFour,
    category: "doors&windows",
  },
  {
    id: 22,
    smallImage: WallOneSmall,
    category: "walls&painting",
  },
  {
    id: 23,
    smallImage: WallTwo,
    category: "walls&painting",
  },
  {
    id: 24,
    smallImage: WallThree,
    category: "walls&painting",
  },
  {
    id: 25,
    smallImage: WallTwo,
    category: "walls&painting",
  },
  {
    id: 26,
    smallImage: WallTwo,
    category: "walls&painting",
  },
  {
    id: 27,
    smallImage: WallTwo,
    category: "walls&painting",
  },
  {
    id: 28,
    smallImage: FlooringOne,
    category: "flooring",
  },
  {
    id: 29,
    smallImage: FlooringTwo,
    category: "flooring",
  },
  {
    id: 30,
    smallImage: FlooringThree,
    category: "flooring",
  },
  {
    id: 31,
    smallImage: FlooringTwo,
    category: "flooring",
  },
  {
    id: 32,
    smallImage: FlooringOne,
    category: "flooring",
  },
  {
    id: 33,
    smallImage: FlooringOne,
    category: "flooring",
  },
  {
    id: 34,
    smallImage: DeckOne,
    category: "stairs&decks",
  },
  {
    id: 35,
    smallImage: DeckTwo,
    category: "stairs&decks",
  },
  {
    id: 36,
    smallImage: DeckTwo,
    category: "stairs&decks",
  },
  {
    id: 37,
    smallImage: DeckTwo,
    category: "stairs&decks",
  },
  {
    id: 38,
    smallImage: DeckTwo,
    category: "stairs&decks",
  },
  {
    id: 39,
    smallImage: DeckTwo,
    category: "stairs&decks",
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
    name: "doors&windows",
  },
  {
    name: "flooring",
  },
  {
    name: "walls&painting",
  },
  {
    name: "stairs&decks",
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
