import React, { useState, useEffect } from "react";

import GalleryInfo from "./GalleryInfo";

// Bathroom images
import BathroomOne from "../../assets/projects/bathroom/bathroom_5.png";
import BathroomTwo from "../../assets/projects/bathroom/bathroom_2.png";
import BathroomThree from "../../assets/projects/bathroom/bathroom_3.png";
import BathroomFour from "../../assets/projects/bathroom/bathroom_4.png";
import BathroomFourSmall from "../../assets/projects/bathroom/bathroom_4_small.jpg";

// Kitchen images
import KitchenOne from "../../assets/projects/kitchen/kitchen_1_large.jpg";
import KitchenOneSmall from "../../assets/projects/kitchen/kitchen_1_small.jpg";
import KitchenTwo from "../../assets/projects/kitchen/kitchen_2.jpg";
import KitchenTwoSmall from "../../assets/projects/kitchen/kitchen_2small.jpg";

// Wall/Painting images
import WallOne from "../../assets/projects/walls/wall_1.png"
import WallOneSmall from "../../assets/projects/walls/wall.jpg"
import WallTwo from "../../assets/projects/walls/wall_2.png"

// Decks/Stairs images
import DeckOne from "../../assets/projects/decks/deck_1.png"
import DeckOneSmall from "../../assets/projects/decks/deck_1_small.jpg"
import DeckTwo from "../../assets/projects/decks/deck_2.png"
import DeckTwoSmall from "../../assets/projects/decks/deck_2_small.jpg"
import DeckThree from "../../assets/projects/decks/deck_3.png"

// Windows/Doors images
import WindowOne from "../../assets/projects/windows/windows_1.png"
import WindowTwo from "../../assets/projects/windows/windows_2.png"
import WindowThree from "../../assets/projects/windows/windows_3.png"

// Flooring images
import FlooringOne from "../../assets/projects/flooring/flooring_1.png"

const projectsData = [
  {
    smallImage: BathroomOne,
    largeImage: BathroomOne,
    category: "Bathroom",
  },
  {
    smallImage: BathroomTwo,
    largeImage: BathroomTwo,
    category: "Bathroom",
  },
  {
    smallImage: BathroomThree,
    category: "Bathroom",
  },
  {
    smallImage: BathroomFourSmall,
    largeImage: BathroomFour,
    category: "Bathroom",
  },

  {
    smallImage: KitchenOneSmall,
    largeImage: KitchenOne,
    category: "Kitchen",
  },
  {
    smallImage: KitchenTwo,
    largeImage: KitchenTwoSmall,
    category: "Kitchen",
  },

  {
    smallImage: WindowOne,
    largeImage: WindowOne,
    category: "doors&windows",
  },
  {
    smallImage: WindowTwo,
    largeImage: WindowTwo,
    category: "doors&windows",
  },
  {
    smallImage: WindowThree,
    largeImage: WindowThree,
    category: "doors&windows",
  },

  {
    smallImage: WallOneSmall,
    largeImage: WallOne,
    category: "walls&painting",
  },
  {
    smallImage: WallTwo,
    largeImage: WallTwo,
    category: "walls&painting",
  },

  {
    smallImage: FlooringOne,
    largeImage: FlooringOne,
    category: "flooring",
  },

  {
    smallImage: DeckOneSmall,
    largeImage: DeckOne,
    category: "stairs&decks",
  },
  {
    smallImage: DeckTwoSmall,
    largeImage: DeckTwo,
    category: "stairs&decks",
  },
  {
    smallImage: DeckThree,
    largeImage: DeckThree,
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
