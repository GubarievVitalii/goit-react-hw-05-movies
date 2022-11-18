import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../utils/API';
import s from "./reviews.module.scss"

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
            {data && data.length > 0 ? (
                data.map(({ author, content }) => {
                    return (
                        <>
                            <p className={s.reviews}>{author}</p>
                            <p className={s.reviews}>{content}</p>
                        </>
                    )
                })) : (<p>We don't have any reviews for this movie.</p>)
            }
        </div>
    );
};

export default Reviews;