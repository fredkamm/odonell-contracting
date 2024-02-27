import React from "react";
import ModalImage from "react-modal-image";

const GalleryInfo = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="text-base">
        <ModalImage
          className="rounded-2xl h-[600px] md:h-[400px] w-fit-content h-fit-content"
          small={item.smallImage}
          large={item.largeImage || item.smallImage}
          alt="gallery image"
        />
      </div>
    </div>
  );
};

export default GalleryInfo;
