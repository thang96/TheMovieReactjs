import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../CircularProgressBar";
import { groupBy } from "lodash";
import PropTypes from "prop-types";

const Banner = ({ movie }) => {
  const certification = (
    (movie?.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (movie?.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew?.job))
    .map((crew) => ({ id: crew?.id, job: crew?.job, name: crew?.name }));

  const groupedCews = groupBy(crews, "job");

  const renderGenres = () => {
    const listGenres = movie?.genres || [];
    return listGenres.map((genre) => {
      return <p key={genre.id}>{`${genre.name},`}</p>;
    });
  };

  return (
    <>
      <div className="relative overflow-hidden text-white">
        <img
          className="absolute inset-0 brightness-[0.2]"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt=""
        />
        <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-6 lg:gap-8">
          <div className="flex-1">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt=""
            />
          </div>
          <div className="flex-[2] text-[1.2vw]">
            <div>
              <p className="mb-2 text-[2vw] font-bold">{movie?.title}</p>
              <p className="mb-2 text-[1.2vw] font-bold">{movie?.tagline}</p>
              <div className="flex items-center gap-4">
                <span className="rounded-[6px] border border-gray-400 p-1 text-gray-400">
                  {certification}
                </span>
                <p>{movie?.release_date}</p>
                {renderGenres()}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CircularProgressBar
                  percent={Math.round(movie?.vote_average * 10)}
                  size={3.5}
                  strokeWidth={0.3}
                  strokeColor="green"
                />
                Rating
              </div>
              <button>
                <FontAwesomeIcon icon={faPlay} className="mr-1" />
                Trailer
              </button>
            </div>
            <div>
              <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
              <p>{movie?.overview}</p>
            </div>
            <div className="mt-4 grid grid-cols-2">
              {Object.keys(groupedCews).map((job) => (
                <div key={job}>
                  <p className="font-bold">{job}</p>
                  <p>{groupedCews[job].map((crew) => crew.name).join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  movie: PropTypes.shape({
    release_dates: PropTypes.object,
    credits: PropTypes.object,
    genres: PropTypes.array,
    title: PropTypes.string,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
  }),
};

export default Banner;
