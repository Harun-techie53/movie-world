import React, { useContext, useEffect, useState } from "react";
import UpcomingMoviesSection from "../../components/Home/UpcominMoviesSection";
import HeroSection from "../../components/Home/HeroSection";
import RatedMoviesSection from "../../components/Home/RatedMoviesSection";
import WatchlistMoviesSection from "../../components/Home/WatchlistMoviesSection";
import { apiGet, apiPost } from "../../helpers/axios/config";
import { MovieContext } from "../../context/MovieContext";
import MyAddedMoviesSection from "../../components/Home/MyAddedMoviesSection";
import CreateMovieModal from "../../components/Home/MyAddedMoviesSection/CreateMovieModal";

const HomeScreen = () => {
  const [isCreateMovieLoading, setIsCreateMovieLoading] = useState(false);
  const { fetchMovies, isMoviesLoading, movies } = useContext(MovieContext);
  const [createMovieFormValues, setCreateMovieFormValues] = useState({
    title: "",
    genres: "",
    description: "",
    image_poster: "",
    image_thumbnail: "",
    trailer_url: "",
    director: "",
    starrers: "",
    rating: "",
    watch_listed: false,
    rated: false,
    release_date: "",
  });

  const handleChangeCreateMovieFormValue = (e) => {
    setCreateMovieFormValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleCreateMovieModalOpen = () => {
    const modal = document.getElementById("create_movie_modal");
    modal.showModal();
  };

  const handleCreateMovieModalClose = () => {
    const modal = document.getElementById("create_movie_modal");
    modal.close();
  };

  const handleCreateMovieFormSubmit = async (e) => {
    e.preventDefault();
    setIsCreateMovieLoading(true);
    try {
      const response = await apiPost({
        apiPath: "/movies",
        data: createMovieFormValues,
      });
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      setIsCreateMovieLoading(false);
    } finally {
      setIsCreateMovieLoading(false);
      setCreateMovieFormValues({
        ...createMovieFormValues,
        title: "",
        genres: "",
        description: "",
        image_poster: "",
        image_thumbnail: "",
        trailer_url: "",
        director: "",
        starrers: "",
        rating: "",
        watch_listed: false,
        rated: false,
        release_date: "",
      });
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const watchListedMovies = movies.filter((movie) => movie.watch_listed);
  const ratedMovies = movies.filter((movie) => movie.rated);

  return (
    <>
      <div className="space-y-16">
        <HeroSection />
        <UpcomingMoviesSection movies={movies} />
        <div className="mx-[10%] space-y-16">
          <RatedMoviesSection
            movies={ratedMovies}
            isLoading={isMoviesLoading}
          />
          <WatchlistMoviesSection
            movies={watchListedMovies}
            isLoading={isMoviesLoading}
          />
          <MyAddedMoviesSection
            handleCreateMovieModalOpen={handleCreateMovieModalOpen}
          />
        </div>
      </div>
      <dialog id="create_movie_modal" className="modal">
        <div className="modal-box bg-[#0f2235]">
          <CreateMovieModal
            handleCreateMovieModalClose={handleCreateMovieModalClose}
            handleChangeCreateMovieFormValue={handleChangeCreateMovieFormValue}
            createMovieFormValues={createMovieFormValues}
            handleCreateMovieFormSubmit={handleCreateMovieFormSubmit}
          />
        </div>
      </dialog>
    </>
  );
};

export default HomeScreen;
