import { Link } from "react-router-dom";
import CircularProgressBar from "../CircularProgressBar";
import PropTypes from "prop-types";

const MovieCard = ({ title, releaseDate, poster, point, mediaType, id }) => {
  const urlImage =
    mediaType === "person"
      ? `https://image.tmdb.org/t/p/original${poster}`
      : `https://image.tmdb.org/t/p/w500${poster}`;

  return (
    <Link to={`/movie/${id}`}>
      <div className="relative cursor-pointer rounded-lg border border-slate-800">
        <p className="absolute top-1 right-1 rounded bg-black/[.54] p-1 text-sm font-bold text-slate-100 shadow-md">
          {mediaType === "tv"
            ? "TV Show"
            : mediaType === "movie"
              ? "Movie"
              : "People"}
        </p>
        <img src={poster == "unknow" ? "./actor_no_image.svg" : urlImage} alt="" />
        <div className="relative -top-[1.5vw] px-4">
          <CircularProgressBar
            percent={Math.round(point * 10)}
            strokeColor={point < 5 ? "red" : point < 7.5 ? "yellow" : "green"}
          />
          <p className="mt-2 font-bold">{title}</p>
          <p className="text-slate-300">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  poster: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  point: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  mediaType: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default MovieCard;
