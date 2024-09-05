import React, { useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MovieContext } from "../../../context/MovieContext";

const MovieCard = ({ movie }) => {
  const { handleMovieUpdate, isMovieUpdateLoading } = useContext(MovieContext);

  const handleUpdateRatedMovie = () => {
    handleMovieUpdate({ movieId: movie?._id, data: { rated: !movie?.rated } });
  };

  const handleUpdateWatchedMovie = () => {
    handleMovieUpdate({
      movieId: movie?._id,
      data: { watch_listed: !movie?.watch_listed },
    });
  };
  return (
    <div className="w-full sm:w-[90%] lg:w-[80%] rounded-box shadow-md bg-[#50505011] group">
      <Link to={`/movies/${movie._id}`}>
        <div className="w-full">
          <img
            src={movie.image_poster}
            alt={movie.title}
            className="w-full object-fill h-[250px] rounded-t-box"
          />
        </div>
      </Link>
      <div className="flex flex-col items-start space-y-4 p-4">
        <Link to={`/movies/${movie._id}`}>
          <p className="font-bold text-lg group-hover:text-blue-700">
            {movie.title.toUpperCase()}
          </p>
        </Link>
        <div className="flex items-center space-x-2">
          <AiFillStar size={20} color={"#FFD700"} />
          <div className="flex items-center">
            <p className="font-bold">{movie.rating}</p>
            <p>(407)</p>
          </div>
          <div onClick={handleUpdateRatedMovie} className="cursor-pointer">
            {movie?.rated ? (
              <AiFillStar size={20} color={"#0096FF"} />
            ) : (
              <AiOutlineStar size={20} color={"#0096FF"} />
            )}
          </div>
        </div>
        <button
          onClick={handleUpdateWatchedMovie}
          className="w-full btn btn-circle text-white bg-gradient-to-r from-[#306ead] to-blue-950"
        >
          {movie?.watch_listed ? (
            <IoCheckmarkOutline size={22} />
          ) : (
            <GoPlus size={22} />
          )}
          <p className="tracking-wider">WATCH LIST</p>
        </button>
        <a
          href={movie.trailer_url}
          target="_blank"
          className="flex items-center space-x-1"
        >
          <IoPlayCircleOutline size={20} />
          <p className="font-bold text-sm text-white">TRAILER</p>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
