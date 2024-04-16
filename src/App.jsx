// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Navbar from "./components/Navigation/Navigation";
import Cast from "./components/MovieCast/MovieCast";
import Reviews from "./components/MovieReviews/MovieReviews";

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Header />}>
//           <Route index element={<HomePage />} />
//           <Route path="/movies" element={<MoviesPage />} />
//           <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="movieCast" element={<Cast />} />
          <Route path="movieReviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
export default App;
