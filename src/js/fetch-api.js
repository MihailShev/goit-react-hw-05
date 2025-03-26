import axios from "axios";

export {
  fetchTrending,
  fetchSearchQuery,
  fetchDetailsMovie,
  fetchDetailsCredits,
  fetchMovieReviews,
  sliceText,
};

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const urlFetchParams = {
  params: {
    language: "en-US",
  },
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzkzNTNiOTAyOWUwYzk1YmM5YjNkMzdiZjEyNTNiYiIsIm5iZiI6MTc0MTM0NjUwNi43NzMsInN1YiI6IjY3Y2FkNmNhZGJhMTQ5MTYwNjJiNTMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zSKQl6D6CImmlm9dSJvN5gkXEwdU1AmUs_T-wSQamYg",
  },
};

const fetchTrending = async () => {
  const resp = await axios("trending/movie/day", urlFetchParams);

  return resp.data;
};

const fetchSearchQuery = async (query) => {
  const resp = await axios(
    `search/movie?include_adult=false&page=1&query=${query}`,
    urlFetchParams
  );
  return resp.data.results;
};

const fetchDetailsMovie = async (movieId) => {
  const resp = await axios(`movie/${movieId}`, urlFetchParams);
  return resp.data;
};

const fetchDetailsCredits = async (movieId) => {
  const resp = await axios(`movie/${movieId}/credits`, urlFetchParams);
  return resp.data.cast;
};

const fetchMovieReviews = async (movieId) => {
  const resp = await axios(`movie/${movieId}/reviews`, urlFetchParams);
  return resp.data.results;
};

const sliceText = (text) =>
  text.length > 23 ? `${text.slice(0, 23)}...` : text;
