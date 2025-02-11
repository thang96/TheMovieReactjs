// import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import Loading from "@components/Loading";
import SearchForm from "@components/SearchForm";
import useFetch from "@hooks/useFetch";
import { lazy, Suspense, useState } from "react";
import { useSearchParams } from "react-router-dom";
const RelatedMediaList = lazy(
  () => import("@components/MediaDetail/RelatedMediaList"),
);

const SearchPage = () => {
  const [searchParam] = useSearchParams();
  const mediaType = searchParam.get("mediaType");
  const [searchFromValue, setSearchFromValue] = useState({
    mediaType: ["tv", "movie"].includes(mediaType) ? mediaType : "movie",
    genres: [],
    rating: "All",
  });

  const [minRating, maxRating] =
    searchFromValue.rating === "All"
      ? [0, 100]
      : searchFromValue.rating.split("-");

  const { data } = useFetch(
    {
      url: `/discover/${searchFromValue.mediaType}?sort_by=popularity.desc&with_genres=${searchFromValue.genres.join(",")}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`,
    },
    {
      enabled: searchFromValue.mediaType,
    },
  );

  return (
    <div className="container flex-col">
      <p className="text-[1.5vw] font-bold">Search</p>
      <div className="flex gap-6">
        <div className="flex-1 gap-6">
          <SearchForm setSearchFromValue={setSearchFromValue} />
        </div>
        <div className="flex-[3]">
          <Suspense fallback={<Loading />}>
            <RelatedMediaList mediaList={data.results || []} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
