import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../CircularProgressBar";
import { groupBy } from "lodash";
import PropTypes from "prop-types";
import ImageComponent from "@components/ImageComponent";
import { useModalContext } from "@context/ModalProvider";

const Banner = ({
  title,
  backdropPath,
  posterPath,
  certification,
  crews,
  genres,
  releaseDate,
  tagline,
  point = 0,
  overview,
  trailerVideoKey,
}) => {
  const groupedCews = groupBy(crews, "job");

  const { openPopup } = useModalContext();

  const renderGenres = () => {
    const listGenres = genres || [];
    return listGenres.map((genre) => {
      return <p key={genre.id}>{`${genre.name},`}</p>;
    });
  };

  return (
    <>
      <div className="relative overflow-hidden bg-black text-white shadow-sm shadow-slate-800">
        <ImageComponent
          className="absolute inset-0 aspect-video w-[100%] brightness-[0.2]"
          src={
            backdropPath && `https://image.tmdb.org/t/p/original${backdropPath}`
          }
          width={2000}
          height={1000}
        />

        <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-6 lg:gap-8">
          <div className="flex-1">
            <ImageComponent
              src={posterPath && `https://image.tmdb.org/t/p/w500${posterPath}`}
              width={500}
              height={800}
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex-[2] text-[1.2vw]">
            <div>
              <p className="mb-2 text-[2vw] font-bold">{title}</p>
              <p className="mb-2 text-[1.2vw] font-bold">{tagline}</p>
              <div className="flex items-center gap-4">
                <span className="rounded-[6px] border border-gray-400 p-1 text-gray-400">
                  {certification}
                </span>
                <p>{releaseDate}</p>
                {renderGenres()}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CircularProgressBar
                  percent={Math.round(point * 10)}
                  size={3.5}
                  strokeWidth={0.3}
                  strokeColor="green"
                />
                Rating
              </div>
              <button
                className="cursor-pointer"
                onClick={() => {
                  openPopup(
                    <iframe
                      title="Trailer"
                      src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                      className="aspect-video w-[50vw]"
                    ></iframe>,
                  );
                }}
              >
                <FontAwesomeIcon icon={faPlay} className="mr-1" />
                Trailer
              </button>
            </div>
            <div>
              <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
              <p>{overview}</p>
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
  title: PropTypes.string,
  backdropPath: PropTypes.string,
  posterPath: PropTypes.string,
  certification: PropTypes.string,
  crews: PropTypes.array,
  genres: PropTypes.array,
  releaseDate: PropTypes.string,
  tagline: PropTypes.string,
  point: PropTypes.number,
  overview: PropTypes.string,
  trailerVideoKey: PropTypes.string,
};

export default Banner;
