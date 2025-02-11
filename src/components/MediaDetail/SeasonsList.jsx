import CircularProgressBar from "@components/CircularProgressBar";
import ImageComponent from "@components/ImageComponent";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const SeasonsList = ({ seasons = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentSeaseons = isShowMore ? seasons : seasons.slice(0, 3);

  const renderSeasons = () => {
    return currentSeaseons.map((season) => {
      return (
        <Link key={season.id} to={`/tv/${season.id}`}>
          <div className="cursor-pointer" key={season.id}>
            <div className="flex gap-4 rounded-lg border border-amber-50 p-3 shadow-md">
              <div className="w-1/3">
                <ImageComponent
                  className="w-full rounded-lg"
                  src={
                    season.poster_path &&
                    `https://image.tmdb.org/t/p/w300${season.poster_path}`
                  }
                  width={210}
                  height={300}
                />
              </div>
              <div className="flex-[1] flex-wrap space-y-1">
                <p className="text-[1.4vw] font-bold">{season.name}</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold">
                    {Math.round(season.vote_average * 10)}
                  </p>
                  <CircularProgressBar
                    percent={62}
                    size={2.5}
                    strokeWidth={0.2}
                  />
                </div>
                <p>
                  <span className="font-bold">Realese date: </span>
                  {season.air_date}
                </p>
                <p>{season.episode_count} Episodes</p>
                <p>{season.overview}</p>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  };
  return (
    <div className="mt-8 text-[1.3vw]">
      <p className="mb-4 text-[1.4vw] font-bold">Seasons</p>
      <div className="space-y-4">{renderSeasons()}</div>
      {seasons.length > 3 && (
        <p
          className="cursor-pointer pt-4"
          onClick={() => {
            setIsShowMore(!isShowMore);
          }}
        >
          {isShowMore ? "Show Less" : "Show More"}{" "}
        </p>
      )}
    </div>
  );
};
SeasonsList.propTypes = {
  seasons: PropTypes.array,
};
export default SeasonsList;
