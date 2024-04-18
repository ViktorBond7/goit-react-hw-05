import { useEffect, useState } from "react";
import { getMoviesCast } from "../../service/movieApi";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import Error from "../ErrorMessage/ErrorMessege";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const Cast = () => {
  const [movieCasts, setMovieCasts] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setError(false);
    setLoader(true);
    const fetchData = async () => {
      try {
        const cast = await getMoviesCast(movieId);
        setMovieCasts(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div className={css.ssss}>
      {loader && <Loader />}
      <ul className={css.container}>
        {movieCasts.map((movieCast) => (
          <li className={css.list} key={movieCast.id}>
            <img
              src={
                movieCast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${movieCast.profile_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <div className={css.title}>
              <p>{movieCast.original_name}</p>
            </div>
          </li>
        ))}
      </ul>
      {error && <Error />}
    </div>
  );
};

export default Cast;
