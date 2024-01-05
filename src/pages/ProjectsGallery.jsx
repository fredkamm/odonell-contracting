import React from "react";

import Gallery from "../components/gallery/Gallery";

export default function ProjectsGallery() {
  return (
    <section id="portfolio" className="section bg-tertiary min-h-[1400px]">
      <div className="container mx-auto mt-5">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Browse Our Recent Work
          </h2>
        </div>
        <Gallery />
      </div>
    </section>
  );;
}
