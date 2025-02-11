import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import ImageComponent from "@components/ImageComponent";
import { useModalContext } from "@context/ModalProvider";
import { Link } from "react-router-dom";

const Movie = ({
  id,
  backdropPath,
  originalTitle,
  releaseDate,
  overview,
  trailerVideoKey,
}) => {
  const { openPopup } = useModalContext();

  return (
    <>
      <ImageComponent
        src={
          backdropPath && `https://image.tmdb.org/t/p/original${backdropPath}`
        }
        className="aspect-video w-full brightness-50"
        width={2000}
        height={1000}
      />

      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{originalTitle}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">{releaseDate}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Over View</p>
            <p>{overview}</p>
          </div>

          <div className="mt-4">
            {trailerVideoKey && (
              <button
                onClick={() => {
                  openPopup(
                    <iframe
                      title="Trailer"
                      src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                      className="aspect-video w-[50vw]"
                    ></iframe>,
                  );
                }}
                className="mr-2 cursor-pointer rounded-lg bg-white px-4 py-2 text-[10px] text-black lg:text-lg"
              >
                <FontAwesomeIcon icon={faPlay} />
                Trailer
              </button>
            )}
            <Link to={`/movie/${id}`}>
              <button className="cursor-pointer rounded-lg bg-slate-300/35 px-4 py-2 text-[10px] lg:text-lg">
                View Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Movie.propTypes = {
  id: PropTypes.number,
  backdropPath: PropTypes.string,
  overview: PropTypes.string,
  originalTitle: PropTypes.string,
  releaseDate: PropTypes.string,
  trailerVideoKey: PropTypes.string,
};

export default Movie;
