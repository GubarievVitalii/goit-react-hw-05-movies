import { Route, Routes } from 'react-router-dom';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import Home from '../pages/home/home';
import Movies from '../pages/movies/movies';
import MovieDetails from '../pages/movieDetails/movieDetails';
import Cast from './cast/cast';
import Reviews from './reviews/reviews';

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