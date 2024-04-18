import { useEffect } from "react";
import getMovies from "../../service/movieApi";
import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/ErrorMessage/ErrorMessege";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const { movies } = await getMovies();
        setMovies(movies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {error && <Error />}
      {movies && <MovieList movies={movies} />}
      {loading && <Loader />}
    </div>
  );
};

export default HomePage;
