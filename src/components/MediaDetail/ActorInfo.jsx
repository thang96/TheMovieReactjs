import PropTypes from "prop-types";

const ActorInfo = ({ id, name, character, profilePath }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300 bg-black/80 text-white shadow-sm">
      <img
        className="rounded-lg"
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${profilePath}`
            : "/actor_no_image.svg"
        }
        alt=""
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        <p>{"15"}</p>
      </div>
    </div>
  );
};

ActorInfo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  character: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  profilePath: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ActorInfo;
