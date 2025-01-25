import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../constants/api";

const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [activetMovieId, setActivetMovieId] = useState();

  useEffect(() => {
    const getDataFromDB = async () => {
      await axios
        .get("https://api.themoviedb.org/3/movie/popular", {
          method: "Get",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        })
        .then((res) => {
          const data = res.data.results;
          const sliceResult = data.slice(0, 4);
          setMovies(sliceResult);
          setActivetMovieId(sliceResult[0].id);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    getDataFromDB();
  }, []);

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activetMovieId)
        .map((movie) => {
          return <Movie key={movie.id} data={movie} />;
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
