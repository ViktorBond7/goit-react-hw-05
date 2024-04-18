import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getSearchMovies } from "../../service/movieApi";
import { Link, useSearchParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import css from "./MoviesPage.module.css";
import Error from "../../components/ErrorMessage/ErrorMessege";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [movies, setMovie] = useState([]);
  const [params, setParams] = useSearchParams("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (value) => {
    // setParams({ query: value });
    params.set("query", value);
    setParams(params);
  };

  useEffect(() => {
    const query = params.get("query");
    if (!query) return;
    setError(false);
    setLoading(true);

    const searchMovies = async () => {
      try {
        const response = await getSearchMovies(query);
        setMovie(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [params]);

  return (
    <div>
      {error && <Error />}
      <Link to="/" className={css.back}>
        <IoIosArrowRoundBack className={css.icon} />
        Go Back
      </Link>
      <SearchBar onSearch={handleSubmit} />
      <MovieList movies={movies} />
      {loading && <Loader />}
    </div>
  );
};
export default MoviesPage;
