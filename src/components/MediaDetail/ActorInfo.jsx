import ImageComponent from "@components/ImageComponent";
import PropTypes from "prop-types";

const ActorInfo = ({ name, character, profilePath, episodeCount }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300 bg-black/80 text-white shadow-sm">
      <ImageComponent
        className="w-full rounded-lg"
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${profilePath}`
            : "/actor_no_image.svg"
        }
        width={300}
        height={450}
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {episodeCount && <p>{episodeCount} Episodes</p>}
      </div>
    </div>
  );
};

ActorInfo.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  character: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  profilePath: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  episodeCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ActorInfo;
