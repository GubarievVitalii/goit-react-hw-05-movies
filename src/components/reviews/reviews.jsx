import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../utils/API';
import s from './reviews.module.scss';

const Reviews = () => {
  const [data, setData] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul className={s.reviews_list}>
      {data && data.length > 0 ? (
        data.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <p className={s.reviews_listItem}>{author}</p>
              <p className={s.reviews_listItem}>{content}</p>
            </li>
          );
        })
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;
