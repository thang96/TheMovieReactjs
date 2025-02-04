export const TRENDING_TABS = [
  {
    id: "all",
    name: "All",
    url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
  },
  {
    id: "movie",
    name: "Movie",
    url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  },

  {
    id: "person",
    name: "People",
    url: "https://api.themoviedb.org/3/trending/person/day?language=en-US",
  },
  {
    id: "tv",
    name: "TV Show",
    url: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
  },
];

export const TOP_RATED_TABS = [
  {
    id: "tv",
    name: "TV Series Lists",
    url: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
  },
  {
    id: "movie",
    name: "Movie",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  },
];
