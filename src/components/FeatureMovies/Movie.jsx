import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Movie = (props) => {
  const { backdrop_path, original_title, release_date, overview } = props.data;

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt=""
        className="aspect-video brightness-50 w-full"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{original_title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Over View</p>
            <p>{overview}</p>
          </div>

          <div className="mt-4">
            <button className="mr-2 cursor-pointer rounded-lg bg-white px-4 py-2 text-[10px] text-black lg:text-lg">
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
            <button className="cursor-pointer rounded-lg bg-slate-300/35 px-4 py-2 text-[10px] lg:text-lg">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Movie.propTypes = {
  data: PropTypes.shape({
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
  }),
};

export default Movie;
