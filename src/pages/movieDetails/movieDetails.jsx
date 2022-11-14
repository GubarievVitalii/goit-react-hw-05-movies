import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from '../../utils/API'

const MovieDetails = () => {
    const [data, setData] = useState()
    const {movieId} = useParams()
    useEffect(() => {
        fetchMovieDetails(movieId).then(data => setData(data)).catch(error => console.log(error))
    }, [movieId])
    
    return (
        <div>
            {data &&
                <>
                <h1>{data.original_title} {data.release_date.split('-')[0]}</h1> 
                <p>User score: {Math.round(data.vote_average*10)}%</p>
                <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt={data.original_title} />
                <p>Overview</p>
                <p>{data.overview}</p>
                <p>Genres</p>
                <p>{data.genres.map(item => item.name).join(', ')}</p>
                <p>Additional inormation</p>
                <ul><li>
                    <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                    </li>
                    <li>
                    <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                    </li>
                    </ul>
                    <Outlet />
                    
                </>}    
        </div>
    )
};

export default MovieDetails;