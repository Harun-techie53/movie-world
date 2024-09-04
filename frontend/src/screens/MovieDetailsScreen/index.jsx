import React from "react";
import ThumbnailSection from "../../components/MovieDetails/ThumbnailSection";
import DetailsSection from "../../components/MovieDetails/DetailsSection";
import CastSection from "../../components/MovieDetails/CastSection";

const MovieDetailsScreen = () => {
  return (
    <div className="mx-[20%] space-y-16 pt-10">
      <div className="space-y-6">
        <ThumbnailSection />
        <DetailsSection />
      </div>
      <CastSection/>
    </div>
  );
};

export default MovieDetailsScreen;
