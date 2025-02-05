import MovieCard from "@components/MovieCard";
import PropTypes from "prop-types";

const RelatedMediaList = ({ mediaList = [] }) => {
  const renderMediaList = () => {
    return mediaList.map((media) => {
      return (
        <MovieCard
          key={media?.id}
          title={media.title}
          releaseDate={media.release_date}
          poster={media?.poster_path}
          point={Math.round(media?.vote_average)}
          mediaType={media?.media_type}
          id={media?.id}
        />
      );
    });
  };

  return (
    <div className="mt-6">
      <p className="mb-4 text-[1.4vw] font-bold">More like this</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">{renderMediaList()}</div>
    </div>
  );
};
RelatedMediaList.propTypes = {
  mediaList: PropTypes.array,
};
export default RelatedMediaList;
