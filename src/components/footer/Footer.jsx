import React from "react";

export default function Footer() {
  return (
    <footer className="bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col p-3 lg:flex-row space-y-6 lg:space-y-3 items-center justify-around md:space-y-1">
          <p className="text-paragraph opacity-80 text-[15px]">
            &copy; 2024 Fred Kamm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
