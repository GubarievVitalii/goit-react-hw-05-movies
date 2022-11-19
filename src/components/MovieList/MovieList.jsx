import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.scss';

const MovieList = ({ array }) => {
  const location = useLocation();

  return (
    <>
      <ol className={s.movieList}>
        {array.map(({ id, title }) => (
          <li className={s.movieList_item} key={id}>
            <Link
              state={location}
              className={s.movieList_link}
              to={`/movies/${id}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};

MovieList.propTypes = {
  array: PropTypes.array.isRequired,
};

export default MovieList;
