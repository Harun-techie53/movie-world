import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full relative">
      <img
        src="/images/poster.jpeg"
        className="object-fill w-full h-[600px] opacity-60 relative"
      />
      <div className="absolute top-[10%] right-[20%] carousel w-[300px] overflow-hidden">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="/images/fight-club.jpg"
            className="w-full mx-auto rounded-lg shadow-lg object-fill relative"
          />
          <div className="absolute bottom-0 left-[20%] z-40">
            <button className="btn">Watch Now</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/images/joker.jpeg"
            className="w-full mx-auto rounded-lg shadow-lg object-fill"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/avatar.jpg"
            className="w-full mx-auto rounded-lg shadow-lg object-fill"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/top-gun-maverick.png"
            className="w-full mx-auto rounded-lg shadow-lg object-fill"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
