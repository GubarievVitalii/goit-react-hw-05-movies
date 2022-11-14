import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from '../../utils/API'
import MovieList from '../../components/MovieList/MovieList'

const Home = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetchTrendingMovies().then(results => setData(results)).catch(error => console.log(error))
    }, [])
    
    return (
        <>
            {data && <MovieList array={data} />}
        </>
    )
};

// Home.propTypes = {
//   data: PropTypes.array.isRequired,
// };

export default Home;