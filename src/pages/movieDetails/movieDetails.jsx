import { useState, useEffect, Suspense } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../utils/API';
import sprite from '../../img/sprite.svg';
import Loader from '../../components/Loader/loader';
import s from './movieDetails.module.scss';

const MovieDetails = () => {
  const [data, setData] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, [movieId]);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={s.movieDetails}>
      {data && (
        <>
          <button
            className={s.movieDetails_btn}
            onClick={() => navigate(location.state ?? '/')}
          >
            <svg className={s.movieDetails_icon} width="18" height="18">
              <use href={`${sprite}#icon-arrow-left`} />
            </svg>
            Go back
          </button>
          <h1 className={s.movieDetails_primaryTitle}>
            {data.original_title} {data.release_date.split('-')[0]}
          </h1>
          <p className={s.movieDetails_title}>
            User score: {Math.round(data.vote_average * 10)}%
          </p>
          <img
            className={s.movieDetails_img}
            src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            alt={data.original_title}
          />
          <p className={s.movieDetails_title}>Overview</p>
          <p>{data.overview}</p>
          <p className={s.movieDetails_title}>Genres</p>
          <p>{data.genres.map(item => item.name).join(', ')}</p>
          <p className={s.movieDetails_title}>Additional inormation</p>
          <ul>
            <li>
              <Link
                state={location.state}
                className={s.movieDetails_link}
                to={`/movies/${movieId}/cast`}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                state={location.state}
                className={s.movieDetails_link}
                to={`/movies/${movieId}/reviews`}
              >
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
