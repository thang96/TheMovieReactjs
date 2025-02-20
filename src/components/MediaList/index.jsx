import { useState } from "react";
import Proptypes from "prop-types";
import MovieCard from "@components/MovieCard";
import useFetch from "@hooks/useFetch";

const MediaList = ({ title, tabs }) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  const url = tabs.find((tab) => tab.id === activeTabId)?.url;
  const { data } = useFetch({
    url,
  });

  const allMoview = data.results || [];

  const renderAllMovie = () => {
    if (!allMoview || allMoview.length == 0) return;
    return allMoview.map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          title={movie.title || movie.original_name}
          releaseDate={movie.release_date || movie.first_air_date || ""}
          poster={movie.poster_path || movie.profile_path || "unknow"}
          point={movie.vote_average || 0}
          mediaType={movie.media_type || activeTabId || ""}
          id={movie.id}
        />
      );
    });
  };

  const renderTab = () => {
    return tabs.map((item) => {
      return (
        <li
          key={item.id}
          className={`cursor-pointer rounded ${activeTabId === item.id ? "bg-white" : "bg-black"} px-2 py-1 ${activeTabId === item.id ? "text-black" : "text-white"} `}
          onClick={() => {
            setActiveTabId(item.id);
          }}
        >
          {item.name}
        </li>
      );
    });
  };

  return (
    <>
      <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
        <div className="mb-6 flex items-center gap-4">
          <p className="font-bold text-[2%vw]">{title}</p>
          <ul className="flex rounded border border-white">{renderTab()}</ul>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
          {renderAllMovie()}
        </div>
      </div>
    </>
  );
};

MediaList.propTypes = {
  title: Proptypes.string.isRequired,
  tabs: Proptypes.array.isRequired,
};

export default MediaList;
