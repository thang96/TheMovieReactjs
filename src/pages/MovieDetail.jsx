import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import MovieInforMation from "@components/MediaDetail/MovieInforMation";
import useFetch from "@hooks/useFetch";

const MovieDetail = () => {
  const { id } = useParams();

  const { data: movie, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
  });
  const { data: relatedMovie, isLoading: isRelatedMediaListLoading } = useFetch(
    {
      url: `/movie/${id}/recommendations`,
    },
  );

  const certification = (
    (movie?.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (movie?.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew?.job))
    .map((crew) => ({ id: crew?.id, job: crew?.job, name: crew?.name }));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner
        movie={movie}
        title={movie.title}
        backdropPath={movie.backdrop_path}
        posterPath={movie.poster_path}
        certification={certification}
        crews={crews}
        genres={movie.genres}
        releaseDate={movie.release_date}
        tagline={movie.tagline}
        point={movie.vote_average}
        overview={movie.overview}
        trailerVideoKey={
          (movie?.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black/100 text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            <ActorList actors={movie?.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMovie?.results || []}
              isLoading={isRelatedMediaListLoading}
              title={"More like this"}
              className="mt-6"
            />
          </div>
          <div className="flex-1">
            <MovieInforMation mediaInfo={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
