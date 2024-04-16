import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import getMovies, { getMoviesByid } from "../../service/movieApi";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  // const [path, setPatch] = useState("");
  const { movieId } = useParams();
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fechedMovie = await getMoviesByid(movieId);
        // const { url } = await getMovies();
        // console.log(url);
        // const { base_url } = url;
        // const imageUrl = `${base_url}/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg`;
        // setPatch(imageUrl);
        setMovie(fechedMovie);
      } catch (error) {}
    };
    fetchData();
    // console.log(path);
  }, [movieId]);
  // console.log(movie);
  return (
    <div>
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
          <div>
            <p>Additional information</p>
            <ul>
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

// {
//     "adult": false,
//     "backdrop_path": "/j3Z3XktmWB1VhsS8iXNcrR86PXi.jpg",
//     "belongs_to_collection": null,
//     "budget": 140956385,
//     "genres": [
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 878,
//             "name": "Science Fiction"
//         },
//         {
//             "id": 12,
//             "name": "Adventure"
//         },
//         {
//             "id": 14,
//             "name": "Fantasy"
//         }
//     ],
//     "homepage": "https://www.godzillaxkongmovie.com",
//     "id": 823464,
//     "imdb_id": "tt14539740",
//     "origin_country": [
//         "US"
//     ],
//     "original_language": "en",
//     "original_title": "Godzilla x Kong: The New Empire",
//     "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
//     "popularity": 2405.98,
//     "poster_path": "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
//     "production_companies": [
//         {
//             "id": 923,
//             "logo_path": "/8M99Dkt23MjQMTTWukq4m5XsEuo.png",
//             "name": "Legendary Pictures",
//             "origin_country": "US"
//         },
//         {
//             "id": 174,
//             "logo_path": "/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png",
//             "name": "Warner Bros. Pictures",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "2024-03-27",
//     "revenue": 436305986,
//     "runtime": 115,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "Rise together or fall alone.",
//     "title": "Godzilla x Kong: The New Empire",
//     "video": false,
//     "vote_average": 6.7,
//     "vote_count": 611
// }
export default MovieDetailsPage;
