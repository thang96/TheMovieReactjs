import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import MovieInforMation from "@components/MediaDetail/MovieInforMation";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [relatedMovie, setRelatedMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRelatedMediaListLoading, setIsRelatedMediaListLoading] =
    useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`;
    const optionMovieDetail = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    };

    const getDetailMovie = async () => {
      await axios
        .get(url, optionMovieDetail)
        .then((res) => {
          const data = res.data;
          setMovie(data);
        })
        .catch((error) => {
          alert(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    getDetailMovie();
  }, [id]);

  useEffect(() => {
    setIsRelatedMediaListLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations`;
    const optionMovieDetail = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    };

    const getDetailMovie = async () => {
      await axios
        .get(url, optionMovieDetail)
        .then((res) => {
          const data = res.data.results || [];
          setRelatedMovie(data);
        })
        .catch((error) => {
          alert(error);
        })
        .finally(() => {
          setIsRelatedMediaListLoading(false);
        });
    };

    getDetailMovie();
  }, [id]);

  if (isLoading && isRelatedMediaListLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner movie={movie} />
      <div className="bg-black/100 text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
          <div className="flex-[2]">
            <ActorList actors={movie?.credits?.cast || []} />
            <RelatedMediaList mediaList={relatedMovie} />
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
