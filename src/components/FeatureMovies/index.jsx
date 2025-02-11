import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useFetch from "@hooks/useFetch";

const FeatureMovie = () => {
  // const [movies, setMovies] = useState([]);
  const [activetMovieId, setActivetMovieId] = useState();

  const { data } = useFetch({
    url: `/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc`,
  });

  const movies = (data?.results || []).slice(0, 4);
  
  const { data: videoResponce } = useFetch(
    {
      url: `/movie/${activetMovieId}/videos`,
    },
    { enabled: !!activetMovieId },
  );

  const temp = (videoResponce?.results || []).find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  )?.key;

  useEffect(() => {
    if (movies[0]?.id) {
      setActivetMovieId(movies[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activetMovieId)
        .map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              backdropPath={movie.backdrop_path}
              originalTitle={movie.original_title}
              releaseDate={movie.release_date}
              overview={movie.overview}
              trailerVideoKey={temp}
            />
          );
        })}
      <PaginateIndicator
        movie={movies}
        activetMovieId={activetMovieId}
        setActivetMovieId={setActivetMovieId}
      />
    </div>
  );
};

FeatureMovie.propTypes = {
  data: PropTypes.shape({}),
};

export default FeatureMovie;
