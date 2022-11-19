import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../utils/API';
import s from './cast.module.scss';
import noPhoto from '../../img/nofoto.jpg';

const Cast = () => {
  const [data, setData] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      <ul className={s.cast}>
        {data &&
          data.map(({ id, profile_path, name, character }) => {
            return (
              <li className={s.cast_list} key={id}>
                <div className={s.cast_wrapper}>
                  <img
                    className={s.cast_img}
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : noPhoto
                    }
                    alt={name}
                  />
                </div>
                <p>{name}</p>
                <p>{character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cast;
