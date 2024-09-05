import React, { useEffect, useState } from "react";
import ThumbnailSection from "../../components/MovieDetails/ThumbnailSection";
import DetailsSection from "../../components/MovieDetails/DetailsSection";
import CastSection from "../../components/MovieDetails/CastSection";
import { useParams } from "react-router-dom";
import { apiGet } from "../../helpers/axios/config";

const MovieDetailsScreen = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const fetchMovie = async () => {
    setIsLoading(true);
    try {
      const response = await apiGet({ apiPath: `/movies/${id}` });
      setMovie(response.data.movie);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    !!id && fetchMovie();
  }, [id]);
  return (
    <div className="mx-[20%] space-y-16 pt-10">
      <div className="space-y-6">
        <ThumbnailSection
          posterImage={movie?.image_poster}
          thumbnailImage={movie?.image_thumbnail}
          title={movie?.title}
        />
        <DetailsSection movie={movie} />
      </div>
      <CastSection casts={movie?.casts || []} />
    </div>
  );
};

export default MovieDetailsScreen;
