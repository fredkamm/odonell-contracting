import BathroomOne from "../../assets/projects/bathroom/bathroom_1.webp";
import BathroomTwo from "../../assets/projects/bathroom/bathroom_2.webp";
import BathroomThree from "../../assets/projects/bathroom/bathroom_3.webp";
import BathroomFour from "../../assets/projects/bathroom/bathroom_4.webp";
import BathroomFive from "../../assets/projects/bathroom/bathroom_5.webp";
import BathroomSix from "../../assets/projects/bathroom/bathroom_6.webp";
import BathroomSeven from "../../assets/projects/bathroom/bathroom_7.webp";
import BathroomEight from "../../assets/projects/bathroom/bathroom_8.webp";
import BathroomNine from "../../assets/projects/bathroom/bathroom_9.webp";
import BathroomTen from "../../assets/projects/bathroom/IMG_2024.webp";
import BathroomEleven from "../../assets/projects/bathroom/IMG_2027.webp";
import BathroomTwelve from "../../assets/projects/bathroom/IMG_2018.webp";
import BathroomThirteen from "../../assets/projects/bathroom/IMG_2017.webp";
import BathroomFourteen from "../../assets/projects/bathroom/IMG_2019.webp";
import BathroomFifteen from "../../assets/projects/bathroom/IMG_2020.webp";
import BathroomSixteen from "../../assets/projects/bathroom/IMG_2021.webp";
import BathroomSeventeen from "../../assets/projects/bathroom/IMG_2022.webp";
import BathroomEighteen from "../../assets/projects/bathroom/IMG_2023.webp";

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
    id: 10,
    smallImage: BathroomTen,
    category: "Bathroom",
  },
  {
    id: 11,
    smallImage: BathroomEleven,
    category: "Bathroom",
  },
  {
    id: 12,
    smallImage: BathroomTwelve,
    category: "Bathroom",
  },
  {
    id: 13,
    smallImage: BathroomThirteen,
    category: "Bathroom",
  },
  {
    id: 14,
    smallImage: BathroomFourteen,
    category: "Bathroom",
  },
  {
    id: 15,
    smallImage: BathroomFifteen,
    category: "Bathroom",

  },
  {
    id: 16,
    smallImage: BathroomSixteen,
    category: "Bathroom",
  },
  {
    id: 17,
    smallImage: BathroomSeventeen,
    category: "Bathroom",
  },
  {
    id: 18,
    smallImage: BathroomEighteen,
    category: "Bathroom",
  },
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

export default projectsData;