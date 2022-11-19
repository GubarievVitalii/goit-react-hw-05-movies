import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainWrapper from '../components/MainWrapper/MainWrapper';
const Home = lazy(() => import('../pages/home/home'));
const Movies = lazy(() => import('../pages/movies/movies'));
const MovieDetails = lazy(() => import('../pages/movieDetails/movieDetails'));
const Cast = lazy(() => import('./cast/cast'));
const Reviews = lazy(() => import('./reviews/reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainWrapper />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
