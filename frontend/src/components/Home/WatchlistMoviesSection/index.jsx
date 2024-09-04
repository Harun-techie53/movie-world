import React, { useRef } from "react";
import MoviesCardCarousel from "../../shared/MoviesCardCarousel";

const WatchlistMoviesSection = () => {
  const sliderRef = useRef();

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="font-bold text-3xl flex items-center space-x-2">
          <p className="text-white">YOUR</p>
          <p className="text-yellow-500">WATCH-LIST</p>
        </div>
      </div>
      <MoviesCardCarousel sliderRef={sliderRef} type={"WATCHLIST"} />
    </div>
  );
};

export default WatchlistMoviesSection;
