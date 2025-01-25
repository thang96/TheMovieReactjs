import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ACCESS_TOKEN } from "../constants/api";
import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";
import ActorList from "../components/MediaDetail/ActorList";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`;
    const optionMovieDetail = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
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

  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <div>
      <Banner movie={movie} />
      <div className="bg-black/100 text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10">
          <div className="flex-[2]">
            <ActorList actors={movie?.credits?.cast || []} />
          </div>
          <div className="flex-1">
            <p className="mb-4 text-[1.4vw] font-bold">Information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
