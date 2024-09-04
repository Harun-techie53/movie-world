import React from "react";
import UpcomingMoviesSection from "../../components/Home/UpcominMoviesSection";
import HeroSection from "../../components/Home/HeroSection";
import RatedMoviesSection from "../../components/Home/RatedMoviesSection";
import WatchlistMoviesSection from "../../components/Home/WatchlistMoviesSection";

const HomeScreen = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <UpcomingMoviesSection />
      <div className="mx-[10%] space-y-16">
        <RatedMoviesSection />
        <WatchlistMoviesSection />
      </div>
    </div>
  );
};

export default HomeScreen;
