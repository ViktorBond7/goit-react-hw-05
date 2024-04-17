import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import getMovies, { getMoviesByid } from "../../service/movieApi";
import css from "./MovieDetailsPage.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import Error from "../../components/ErrorMessage/ErrorMessege";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  // const [path, setPatch] = useState("");
  const { movieId } = useParams();
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  useEffect(() => {
    if (!movieId) return;
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const fechedMovie = await getMoviesByid(movieId);
        // const { url } = await getMovies();
        // console.log(url);
        // const { base_url } = url;
        // const imageUrl = `${base_url}/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg`;
        // setPatch(imageUrl);
        setMovie(fechedMovie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {error && <Error />}
      {loading && <Loader />}
      <Link to={backLink.current} className={css.back}>
        <IoIosArrowRoundBack className={css.icon} />
        Go Back
      </Link>
      {movie && (
        <div>
          <div className={css.container}>
            <img
              className={css.img}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <div className={css.title}>
              <h1>{movie.original_title}</h1>
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
              <h4 className={css.genreTitle}>Genres:</h4>
              <ul className={css.genres}>
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={css.infa}>
            <p>Additional information</p>
            <ul className={css.list}>
              <li>
                <Link to="movieCast">Cast</Link>
              </li>
              <li>
                <Link to="movieReviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
