import FeatureMovie from "../components/FeatureMovies";
import MediaList from "../components/MediaList";
import { TRENDING_TABS, TOP_RATED_TABS } from "../libs/constants";

function HomePage() {
  return (
    <>
      <div>
        <FeatureMovie />
        <MediaList title={"Trending"} tabs={TRENDING_TABS} />
        <MediaList title={"Top Rated"} tabs={TOP_RATED_TABS} />
      </div>
    </>
  );
}

export default HomePage;
