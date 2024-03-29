import React from "react";
import ModalImage from "react-modal-image";

const GalleryInfo = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="text-base">
        <ModalImage
          className="rounded-2xl h-[500px] w-fit-content "
          small={item.smallImage}
          large={item.smallImage}
          alt="gallery image"
        />
      </div>
    </div>
  );
};

export default GalleryInfo;
