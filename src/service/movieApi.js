import axios from "axios";

const options = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWE0YjE5YjQyZTM1YWI2MDE5NmIwOTM5ZjQyMmUzMyIsInN1YiI6IjY2MTdhM2NhOTBiODdlMDE3YzNkYjY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bDQ7orukftd8IdjMheMCls82Gnwcl3FGmZOaIrv1ei4",
  },
};
const url = "https://api.themoviedb.org/3/trending/movie/day";

const getMovies = async () => {
  const response = await axios.get(url, options);
  return response.data;
  //   console.log(response.data);
};

export default getMovies;
