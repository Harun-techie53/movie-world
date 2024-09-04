import React from "react";
import { moviesImages } from "../../../dev-data/images";

const ThumbnailSection = () => {
  return (
    <div className="flex items-start space-x-10">
      <img
        src={moviesImages[0].path}
        alt={moviesImages[0].title}
        className="w-[250px] rounded-box object-fill"
      />
      <img
        src={moviesImages[0].thumbnail}
        alt={moviesImages[0].title}
        className="w-full h-[350px] object-fill"
      />
    </div>
  );
};

export default ThumbnailSection;
