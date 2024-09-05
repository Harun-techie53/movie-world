import React, { useEffect, useState } from "react";
import MovieCard from "../../components/shared/MovieCard";
import { apiGet } from "../../helpers/axios/config";

const MoviesScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response = await apiGet({ apiPath: "/movies" });
      setMovies(response.data.movies);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="mx-[10%] pt-10">
      {movies.length > 0 ? (
        <div className="space-y-10">
          <p className="text-2xl">There are {movies?.length} movies.</p>
          <div className="grid grid-cols-5 grid-flow-row">
            {movies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-2xl text-red-600 text-center bg-red-500 bg-opacity-20 p-5">
          No Movies Found
        </div>
      )}
    </div>
  );
};

export default MoviesScreen;
