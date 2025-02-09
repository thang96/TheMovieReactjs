import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CircularProgressBar from "./CircularProgressBar";
import ImageComponent from "./ImageComponent";

const MovieCard = ({ title, releaseDate, poster, point, mediaType, id }) => {
  const urlImage =
    mediaType === "person"
      ? `https://image.tmdb.org/t/p/original${poster}`
      : `https://image.tmdb.org/t/p/w500${poster}`;

  return (
    <Link
      to={mediaType === "tv" ? `/tv/${id}` : `/movie/${id}`}
      className="cursor-pointer rounded-lg border border-slate-800"
    >
      <div className="relative">
        <p className="absolute top-1 right-1 rounded bg-black/[.54] p-1 text-sm font-bold text-slate-100 shadow-md">
          {mediaType === "tv"
            ? "TV Show"
            : mediaType === "movie"
              ? "Movie"
              : "People"}
        </p>
        <ImageComponent
          className="w-full rounded-lg"
          src={poster == "unknow" ? "./actor_no_image.svg" : urlImage}
          width={210}
          height={300}
        />

        <div className="relative -top-[1.5vw] px-4">
          <CircularProgressBar
            percent={Math.round(point * 10)}
            strokeColor={point < 5 ? "red" : point < 7.5 ? "yellow" : "green"}
          />
          <p className="mt-2 font-bold text-[1.2vw]">{title}</p>
          <p className="text-slate-300">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  poster: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  point: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mediaType: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MovieCard;
