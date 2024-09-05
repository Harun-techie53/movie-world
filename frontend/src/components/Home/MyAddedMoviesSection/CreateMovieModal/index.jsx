import React from "react";

const CreateMovieModal = ({
  handleCreateMovieModalClose,
  handleChangeCreateMovieFormValue,
  createMovieFormValues,
  handleCreateMovieFormSubmit,
}) => {
  const {
    title,
    genres,
    description,
    image_poster,
    image_thumbnail,
    trailer_url,
    director,
    starrers,
    rating,
    watch_listed,
    rated,
    release_date,
  } = createMovieFormValues;
  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={handleCreateMovieFormSubmit}
    >
      <label className="text-white font-bold flex-1">
        Title
        <input
          id="title"
          type="text"
          className="border rounded w-full py-1 px-2 font-normal bg-white text-black"
          onChange={handleChangeCreateMovieFormValue}
          value={title}
        ></input>
      </label>
      <label className="text-white font-bold flex-1">
        Genres
        <input
          id="genres"
          type="text"
          onChange={handleChangeCreateMovieFormValue}
          value={genres}
          className="border rounded w-full py-1 px-2 font-normal bg-white text-black"
        ></input>
      </label>
      <label className="text-white font-bold flex-1">
        Description
        <textarea
          id="description"
          type="text"
          onChange={handleChangeCreateMovieFormValue}
          value={description}
          className="border rounded w-full py-1 px-2 font-normal bg-white text-black"
        ></textarea>
      </label>
      <label className="text-white font-bold flex-1">
        Poster Image URL
        <input
          id="image_poster"
          type="text"
          onChange={handleChangeCreateMovieFormValue}
          value={image_poster}
          className="border rounded w-full py-1 px-2 font-normal bg-white text-black"
        ></input>
      </label>
      <label className="text-white font-bold flex-1">
        Thumbnail Image URL
        <input
          id="image_thumbnail"
          type="text"
          onChange={handleChangeCreateMovieFormValue}
          value={image_thumbnail}
          className="border rounded w-full py-1 px-2 font-normal bg-white text-black"
        ></input>
      </label>
      <label className="text-white font-bold flex-1">
        Trailer URL
        <input
          id="trailer_url"
          type="text"
          onChange={handleChangeCreateMovieFormValue}
          value={trailer_url}
          className="border rounded w-full py-1 px-2 font-normal bg-white text-black"
        ></input>
      </label>
      <label className="text-white font-bold flex-1">
        Director Name
        <input
          id="director"
          type="text"
          onChange={handleChangeCreateMovieFormValue}
          value={director}
          className="border rounded w-full py-1 px-2 font-normal bg-white text-black"
        ></input>
      </label>
      <label className="text-white font-bold flex-1">
        Star Casts
        <input
          id="starrers"
          type="text"
          onChange={handleChangeCreateMovieFormValue}
          value={starrers}
          className="border rounded w-full py-1 px-2 font-normal bg-white text-black"
        ></input>
      </label>
      <label className="text-white font-bold flex-1">
        Released Year
        <input
          id="release_date"
          type="text"
          onChange={handleChangeCreateMovieFormValue}
          value={release_date}
          className="border rounded w-full py-1 px-2 font-normal bg-white text-black"
        ></input>
      </label>
      <label className="text-white font-bold flex-1">
        Rating by You
        <input
          id="rating"
          type="text"
          onChange={handleChangeCreateMovieFormValue}
          value={rating}
          className="border rounded w-full py-1 px-2 font-normal bg-white text-black"
        ></input>
      </label>
      <div className="flex items-center space-x-4">
        <button
          className="w-1/2 btn rounded-full bg-red-900 text-white"
          onClick={handleCreateMovieModalClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-1/2 btn rounded-full bg-blue-900 text-white"
        >
          CREATE MOVIE
        </button>
      </div>
    </form>
  );
};

export default CreateMovieModal;
