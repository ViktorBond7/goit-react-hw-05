import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getSearchMovies } from "../../service/movieApi";
import { Link, useSearchParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovie] = useState([]);
  const [params, setParams] = useSearchParams("");

  const handleSubmit = (value) => {
    // setParams({ query: value });
    params.set("query", value);
    setParams(params);
  };

  useEffect(() => {
    const query = params.get("query");
    if (!query) return;

    const searchMovies = async () => {
      try {
        const response = await getSearchMovies(query);
        setMovie(response);
      } catch (error) {}
    };
    searchMovies();
  }, [params]);

  return (
    <div>
      <Link to="/" className={css.back}>
        <IoIosArrowRoundBack className={css.icon} />
        Go Back
      </Link>
      <SearchBar onSearch={handleSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};
export default MoviesPage;
