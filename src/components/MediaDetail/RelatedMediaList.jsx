import Loading from "@components/Loading";
import MovieCard from "@components/MovieCard";
import PropTypes from "prop-types";

const RelatedMediaList = ({
  mediaList = [],
  isLoading = false,
  title,
  className,
}) => {
  const renderMediaList = () => {
    return mediaList.map((media) => {
      return (
        <MovieCard
          key={media?.id}
          title={media.title || media?.name}
          releaseDate={media.release_date || media.first_air_date}
          poster={media?.poster_path}
          point={Math.round(media?.vote_average)}
          mediaType={media?.media_type}
          id={media?.id}
        />
      );
    });
  };

  return (
    <div className={className}>
      {title && <p className="mb-4 text-[1.4vw] font-bold">{title}</p>}
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {isLoading ? <Loading /> : renderMediaList()}
      </div>
    </div>
  );
};
RelatedMediaList.propTypes = {
  mediaList: PropTypes.array,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
};
export default RelatedMediaList;
