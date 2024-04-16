import { useEffect, useState } from "react";
import { getMoviesReviews } from "../../service/movieApi";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fechData = async () => {
      try {
        const reviews = await getMoviesReviews(movieId);
        setMovieReviews(reviews);
      } catch (error) {}
    };
    fechData();
  }, [movieId]);

  return (
    <div>
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
    </div>
  );
};

export default Reviews;
