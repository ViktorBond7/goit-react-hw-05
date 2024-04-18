import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWE0YjE5YjQyZTM1YWI2MDE5NmIwOTM5ZjQyMmUzMyIsInN1YiI6IjY2MTdhM2NhOTBiODdlMDE3YzNkYjY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bDQ7orukftd8IdjMheMCls82Gnwcl3FGmZOaIrv1ei4",
  },
};

const getMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return {
    movies: response.data.results,
    url: response,
  };
};

export default getMovies;

export const getMoviesByid = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const getMoviesCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const getMoviesReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data.results;
};

export const getSearchMovies = async (query) => {
  const response = await axios.get(`/search/movie?query=${query}`, options);
  return response.data.results;
};
