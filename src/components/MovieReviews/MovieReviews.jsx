import { useEffect, useState } from "react";
import { getMoviesReviews } from "../../service/movieApi";
import { useParams } from "react-router-dom";
import Error from "../ErrorMessage/ErrorMessege";
import Loader from "../Loader/Loader";

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setError(false);
    setLoader(true);
    const fechData = async () => {
      try {
        const reviews = await getMoviesReviews(movieId);
        setMovieReviews(reviews);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fechData();
  }, [movieId]);

  return (
    <div>
      {error && <Error />}
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map((movieReview) => (
            <li key={movieReview.id}>
              <h3>{movieReview.author}</h3>
              <p>{movieReview.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews fot this movie</p>
        )}
      </ul>
      {loader && <Loader />}
    </div>
  );
};

export default Reviews;
