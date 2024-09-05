import React from "react";
import MovieCard from "../MovieCard";
import Slider from "react-slick";
import { IoChevronBackSharp, IoChevronForward } from "react-icons/io5";

const MoviesCardCarousel = ({ type, sliderRef, movies }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderCarouselArrows = () => {
    return (
      <div>
        <button
          className={`btn btn-square bg-white absolute z-20 left-0 md:left-[9%] ${
            type === "RATING" && "-bottom-[68%]"
          } ${type === "WATCHLIST" && "-bottom-[120%]"} -bottom-[68%] ${
            type === "RATING" && "md:-bottom-[60%]"
          } ${type === "WATCHLIST" && "md:-bottom-[120%]"}`}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <IoChevronBackSharp size={24} />
        </button>
        <button
          className={`btn btn-square bg-white absolute z-20 right-0 md:right-[12%] ${
            type === "RATING" && "-bottom-[68%]"
          } ${type === "WATCHLIST" && "-bottom-[120%]"} -bottom-[68%] ${
            type === "RATING" && "md:-bottom-[60%]"
          } ${type === "WATCHLIST" && "md:-bottom-[120%]"}`}
          onClick={() => sliderRef.current.slickNext()}
        >
          <IoChevronForward size={24} />
        </button>
      </div>
    );
  };

  return (
    <div className="slider-container">
      {renderCarouselArrows()}
      <Slider {...settings} ref={sliderRef}>
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MoviesCardCarousel;
