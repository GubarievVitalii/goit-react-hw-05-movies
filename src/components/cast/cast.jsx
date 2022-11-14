import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../utils/API';

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
      <ul>
        {data && data.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
};

export default Cast;
