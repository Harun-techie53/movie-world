import { createContext, useState } from "react";
import { apiGet, apiPatch } from "../helpers/axios/config";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [isMovieUpdateLoading, setIsMovieUpdateLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    setIsMoviesLoading(true);
    try {
      const response = await apiGet({ apiPath: "/movies" });
      setMovies(response.data.movies);
    } catch (error) {
      console.log("error", error);
      setIsMoviesLoading(false);
    } finally {
      setIsMoviesLoading(false);
    }
  };

  const handleMovieUpdate = async ({ movieId, data }) => {
    setIsMovieUpdateLoading(true);
    try {
      const response = await apiPatch({ apiPath: `/movies/${movieId}`, data });
      const index = movies.findIndex((movie) => movie._id === movieId);
      if (index > -1) {
        let newMovies = [...movies];
        newMovies[index] = response.data.movie;
        setMovies(newMovies);
      }
    } catch (error) {
      console.log("error", error);
      setIsMovieUpdateLoading(false);
    } finally {
      setIsMovieUpdateLoading(false);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        fetchMovies,
        isMoviesLoading,
        handleMovieUpdate,
        isMovieUpdateLoading
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
