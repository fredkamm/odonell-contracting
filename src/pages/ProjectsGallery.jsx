import React from "react";

import Gallery from "../components/gallery/Gallery";

export default function ProjectsGallery() {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Recent Work
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <Gallery />
      </div>
    </section>
  );;
}
