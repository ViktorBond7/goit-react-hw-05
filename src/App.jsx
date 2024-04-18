import { Route, Routes } from "react-router-dom";
import "modern-normalize/modern-normalize.css";
import { lazy, Suspense } from "react";
import "./App.css";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Navbar = lazy(() => import("./components/Navigation/Navigation"));
const Cast = lazy(() => import("./components/MovieCast/MovieCast"));
const Reviews = lazy(() => import("./components/MovieReviews/MovieReviews"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

const App = () => {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<b>Loading page...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="movieCast" element={<Cast />} />
            <Route path="movieReviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
