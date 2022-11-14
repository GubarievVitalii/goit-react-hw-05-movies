import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../utils/API';

const Reviews = () => {
    const [data, setData] = useState();
    const { movieId } = useParams();
    useEffect(() => {
        fetchMovieReviews(movieId)
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, [movieId]);

    return (
        <div>
            {data && data.length>0 ? (
                data.map(({ author, content }) => {
                    return (
                        <>
                            <p>{author}</p>
                            <p>{content}</p>
                        </>
                    )
                })) : (<p>We don't have any reviews for this movie.</p>)
            }
        </div>
    );
}

export default Reviews;