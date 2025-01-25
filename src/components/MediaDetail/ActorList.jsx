import { useState } from "react";
import ActorInfo from "./ActorInfo";
import PropTypes from "prop-types";

const ActorList = ({ actors }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const currentActors = isShowMore ? actors : actors.slice(0, 4);

  const renderActors = () => {
    return currentActors.map((actor) => {
      return (
        <ActorInfo
          key={actor?.id}
          id={actor?.id || 0}
          name={actor?.name || ""}
          character={actor?.character || ""}
          profilePath={actor?.profile_path}
        />
      );
    });
  };

  return (
    <div className="">
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {renderActors()}
      </div>
      <p
        className="cursor-pointer pt-4"
        onClick={() => {
          setIsShowMore(!isShowMore);
        }}
      >
        {isShowMore ? "Show Less" : "Show More"}{" "}
      </p>
    </div>
  );
};

ActorList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }),
  ).isRequired,
};

export default ActorList;
