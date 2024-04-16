import { useEffect, useState } from "react";
import { getMoviesReviews } from "../../service/movieApi";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fechData = async () => {
      try {
        const reviews = await getMoviesReviews(movieId);
        //   setMovieReviews(reviews)
        console.log(reviews);
      } catch (error) {}
    };
    fechData();
  }, [movieId]);

  return <div>lllll</div>;
};

export default Reviews;
