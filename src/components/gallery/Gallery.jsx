import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

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
import KitchenSeven from "../../assets/projects/kitchen/kitchen_7.webp";
import KitchenEight from "../../assets/projects/kitchen/kitchen_8.webp";
import KitchenNine from "../../assets/projects/kitchen/kitchen_9.webp";

import WallOne from "../../assets/projects/walls/wall.webp";
import WallTwo from "../../assets/projects/walls/wall_2.webp";
import WallThree from "../../assets/projects/walls/wall_1.webp";
import WallFour from "../../assets/projects/walls/wall_3.webp";
import WallFive from "../../assets/projects/walls/wall_4.webp";
import WallSix from "../../assets/projects/walls/wall_5.webp";

import DeckOne from "../../assets/projects/decks/deck_1.webp";
import DeckTwo from "../../assets/projects/decks/deck_2.webp";
import DeckThree from "../../assets/projects/decks/deck_3.webp";
import DeckFour from "../../assets/projects/decks/deck_4.webp";
import DeckFive from "../../assets/projects/decks/deck_5.webp";
import StairsOne from "../../assets/projects/decks/stairs_1.webp";

import WindowTwo from "../../assets/projects/windows/windows_2.webp";
import WindowThree from "../../assets/projects/windows/windows_3.webp";
import WindowFour from "../../assets/projects/windows/windows_4.webp";
import DoorOne from "../../assets/projects/windows/doors_1.webp";
import DoorTwo from "../../assets/projects/windows/doors_2.webp";
import DoorThree from "../../assets/projects/windows/doors_3.webp";

import FlooringOne from "../../assets/projects/flooring/flooring_1.webp";
import FlooringTwo from "../../assets/projects/flooring/flooring_2.webp";
import FlooringThree from "../../assets/projects/flooring/flooring_3.webp";
import FlooringFour from "../../assets/projects/flooring/flooring_4.webp";
import FlooringFive from "../../assets/projects/flooring/flooring_5.webp";
import FlooringSix from "../../assets/projects/flooring/flooring_6.webp";

import PoolHouseTwo from "../../assets/projects/additions/poolhouse.webp";
import AdditionOne from "../../assets/projects/additions/addition_1.webp";
import AdditionTwo from "../../assets/projects/additions/addition_2.webp";
import AdditionThree from "../../assets/projects/additions/addition_3.webp";

const projectsData = [
  // * BATHROOM
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
  // * KITCHEN
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
    smallImage: KitchenSeven,
    category: "Kitchen",
  },
  {
    id: 17,
    smallImage: KitchenEight,
    category: "Kitchen",
  },
  {
    id: 18,
    smallImage: KitchenNine,
    category: "Kitchen",
  },
  // * DOORS & WINDOWS
  {
    id: 19,
    smallImage: DoorTwo,
    category: "doors&windows",
  },
  {
    id: 20,
    smallImage: WindowTwo,
    category: "doors&windows",
  },
  {
    id: 21,
    smallImage: WindowThree,
    category: "doors&windows",
  },
  {
    id: 22,
    smallImage: WindowFour,
    category: "doors&windows",
  },
  {
    id: 23,
    smallImage: DoorThree,
    category: "doors&windows",
  },
  {
    id: 24,
    smallImage: DoorOne,
    category: "doors&windows",
  },
  // * WALLS & PAINTING
  {
    id: 25,
    smallImage: WallOne,
    category: "walls&painting",
  },
  {
    id: 26,
    smallImage: WallTwo,
    category: "walls&painting",
  },
  {
    id: 27,
    smallImage: WallThree,
    category: "walls&painting",
  },
  {
    id: 28,
    smallImage: WallFour,
    category: "walls&painting",
  },
  {
    id: 29,
    smallImage: WallFive,
    category: "walls&painting",
  },
  {
    id: 30,
    smallImage: WallSix,
    category: "walls&painting",
  },
  // * FLOORING
  {
    id: 31,
    smallImage: FlooringFour,
    category: "flooring",
  },
  {
    id: 32,
    smallImage: FlooringTwo,
    category: "flooring",
  },
  {
    id: 33,
    smallImage: FlooringSix,
    category: "flooring",
  },
  {
    id: 34,
    smallImage: FlooringOne,
    category: "flooring",
  },
  {
    id: 35,
    smallImage: FlooringFive,
    category: "flooring",
  },
  {
    id: 36,
    smallImage: FlooringThree,
    category: "flooring",
  },
  // * STAIRS & DECKS
  {
    id: 37,
    smallImage: DeckOne,
    category: "stairs&decks",
  },
  {
    id: 38,
    smallImage: DeckTwo,
    category: "stairs&decks",
  },
  {
    id: 39,
    smallImage: DeckThree,
    category: "stairs&decks",
  },
  {
    id: 40,
    smallImage: StairsOne,
    category: "stairs&decks",
  },
  {
    id: 41,
    smallImage: DeckFour,
    category: "stairs&decks",
  },
  {
    id: 42,
    smallImage: DeckFive,
    category: "stairs&decks",
  },
  // * ADDITIONS
  {
    id: 43,
    smallImage: PoolHouseTwo,
    category: "additions",
  },
  {
    id: 44,
    smallImage: AdditionOne,
    category: "additions",
  },
  {
    id: 45,
    smallImage: AdditionTwo,
    category: "additions",
  },
  {
    id: 46,
    smallImage: AdditionThree,
    category: "additions",
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
  {
    name: "additions",
  },
];

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
            Currently Viewing: <span className="font-bold capitalize text-primary">{item.name}</span>
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
