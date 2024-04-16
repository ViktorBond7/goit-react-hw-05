import { useEffect, useState } from "react";
import { getMoviesCast } from "../../service/movieApi";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import DefaultImg from "../DefaultImg/DefaultImg";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const Cast = () => {
  const [movieCasts, setMovieCasts] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cast = await getMoviesCast(movieId);
        setMovieCasts(cast);
        // console.log(cast);
      } catch (error) {}
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
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
            <p>{movieCast.original_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

// adult: false;
// cast_id: 13;
// character: "Paul Atreides";
// credit_id: "5b4d01bac3a36823d803cd45";
// gender: 2;
// id: 1190668;
// known_for_department: "Acting";
// name: "Timothée Chalamet";
// order: 0;
// original_name: "Timothée Chalamet";
// popularity: 122.859;
// profile_path: "/BE2sdjpgsa2rNTFa66f7upkaOP.jpg";
