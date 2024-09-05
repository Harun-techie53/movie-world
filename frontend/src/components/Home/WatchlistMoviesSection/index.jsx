import React, { useRef } from "react";
import MoviesCardCarousel from "../../shared/MoviesCardCarousel";
import SkeletonMovieCard from "../../shared/SkeletonMovieCard";

const WatchlistMoviesSection = ({ movies, isLoading }) => {
  const sliderRef = useRef();

  if (isLoading) {
    return (
      <div className="flex items-center space-x-14">
        {[1, 2, 3, 4, 5].map((item) => (
          <SkeletonMovieCard />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="font-bold text-3xl flex items-center space-x-2">
          <p className="text-white">YOUR</p>
          <p className="text-yellow-500">WATCH-LIST</p>
        </div>
      </div>
      {movies.length > 0 ? (
        <MoviesCardCarousel
          sliderRef={sliderRef}
          type={"WATCHLIST"}
          movies={movies}
        />
      ) : (
        <div className="text-2xl text-red-600 text-center bg-red-500 bg-opacity-20 p-5">
          No Movies Found
        </div>
      )}
    </div>
  );
};

export default WatchlistMoviesSection;
