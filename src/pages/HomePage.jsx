import React from "react";
import Carousel from "../components/carousel/Carousel";

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold underline mt-12">Home Page</h1>
      <h1 className="text-3xl font-bold underline mt-12">Short Description</h1>
      <h1 className="text-3xl font-bold underline mt-12">Gallery Preview </h1>
      <Carousel />
      <h1 className="text-3xl font-bold underline mt-12">
        Contact information
      </h1>
    </>
  );
}
