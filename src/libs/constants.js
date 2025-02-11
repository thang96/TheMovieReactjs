export const TRENDING_TABS = [
  {
    id: "all",
    name: "All",
    url: "/trending/all/day?language=en-US",
  },
  {
    id: "movie",
    name: "Movie",
    url: "/trending/movie/day?language=en-US",
  },

  {
    id: "tv",
    name: "TV Show",
    url: "/trending/tv/day?language=en-US",
  },
];

export const TOP_RATED_TABS = [
  {
    id: "tv",
    name: "TV Series Lists",
    url: "/tv/top_rated?language=en-US&page=1",
  },
  {
    id: "movie",
    name: "Movie",
    url: "/movie/top_rated?language=en-US&page=1",
  },
];

export const GENDER_MAPPING = {
  0: "Not set / not specified",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};
