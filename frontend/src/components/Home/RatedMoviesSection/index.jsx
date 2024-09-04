import React, { useRef } from "react";
import MoviesCardCarousel from "../../shared/MoviesCardCarousel";

const RatedMoviesSection = () => {
  const sliderRef = useRef();

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <div className="font-bold text-3xl flex items-center space-x-2">
          <p className="text-yellow-500">MOVIES YOU</p>
          <p className="text-blue-600">RATED</p>
        </div>
      </div>
      <MoviesCardCarousel sliderRef={sliderRef} type={"RATING"} />
    </div>
  );
};

export default RatedMoviesSection;
