import React from "react";
import { moviesImages } from "../../../dev-data/images";

const ThumbnailSection = ({ posterImage, thumbnailImage, title }) => {
  return (
    <div className="flex items-start space-x-10">
      <img
        src={posterImage || ""}
        alt={title}
        className="w-[250px] rounded-box object-fill"
      />
      <img
        src={thumbnailImage || ""}
        alt={title}
        className="w-full h-[350px] object-fill"
      />
    </div>
  );
};

export default ThumbnailSection;
