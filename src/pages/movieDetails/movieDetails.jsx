import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from '../../utils/API'
import s from "./movieDetails.module.scss"

const MovieDetails = () => {
    const [data, setData] = useState()
    const {movieId} = useParams()
    useEffect(() => {
        fetchMovieDetails(movieId).then(data => setData(data)).catch(error => console.log(error))
    }, [movieId])
    
    return (
        <div className={s.movieDetails}>
            {data &&
                <>
                    <h1 className={s.movieDetails_primaryTitle}>{data.original_title} {data.release_date.split('-')[0]}</h1>
                    <p className={s.movieDetails_title}>User score: {Math.round(data.vote_average * 10)}%</p>
                    <img className={s.movieDetails_img} src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt={data.original_title} />
                    <p className={s.movieDetails_title}>Overview</p>
                    <p>{data.overview}</p>
                    <p className={s.movieDetails_title}>Genres</p>
                    <p>{data.genres.map(item => item.name).join(', ')}</p>
                    <p className={s.movieDetails_title}>Additional inormation</p>
                    <ul><li>
                        <Link className={s.movieDetails_link} to={`/movies/${movieId}/cast`}>Cast</Link>
                    </li>
                        <li>
                            <Link className={s.movieDetails_link} to={`/movies/${movieId}/reviews`}>Reviews</Link>
                        </li>
                    </ul>
                    <Outlet/>
                    
                </>}
        </div>
    );
};

export default MovieDetails;