import { useEffect } from "react";
import getMovies from "../../service/movieApi";
import { useState } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
        // console.log(movies);
      } catch (error) {
        console.log("fhfhfh", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Updated movies:", movies);
  }, []);
  console.log(movies);
  return <div></div>;
};

export default HomePage;
