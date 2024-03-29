import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import KitchenOne from "../../assets/projects/carousel/kitchen_1.webp";
import KitchenFour from "../../assets/projects/carousel/kitchen_4.webp";
import KitchenSix from "../../assets/projects/carousel/kitchen_6.webp";
import Bathroom from "../../assets/projects/carousel/bathroom.webp";
import Deck from "../../assets/projects/carousel/deck.webp";


export default function Carousel() {
  const slides = [
    {
      url: KitchenSix,
    },
    {
      url: KitchenOne,
    },
    {
      url: KitchenFour,
    },
    {
      url: Bathroom,
    },
    {
      url: Deck,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000); // Auto switch every 10 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[600px] w-full m-auto pt-4 pb-16 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-contain bg-no-repeat duration-500"
      ></div>
      <Link 
        className="flex justify-center p-4 bg-tertiary text-white"
        to="/gallery"
      >
        View Gallery
      </Link>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? "text-accent" : "text-gray-500"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
