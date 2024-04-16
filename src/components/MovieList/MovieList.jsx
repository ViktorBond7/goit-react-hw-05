import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className={css.container}>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              // className={css.link}
              to={`/movies/${movie.id}`}
              // state={location}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// const MovieList = ({ movies, urlPath }) => {
//   const defaultImg =
//     "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
//   return (
//     <div className={css.container}>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <img
//               className={css.image}
//               src={
//                 movie.poster_path
//                   ? `${urlPath}${movie.poster_path}`
//                   : defaultImg
//               }
//             />
//             <p>{movie.title}</p>
//           </li>
//         ))}
//       </ul>
//       ;
//     </div>
//   );
// };
export default MovieList;
