import { useState, useEffect } from "react";
import { fetchTrendingMovies } from '../../utils/API'
import MovieList from '../../components/MovieList/MovieList'
import s from "./home.module.scss"

const Home = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetchTrendingMovies().then(results => setData(results)).catch(error => console.log(error))
    }, [])
    
    return (
        <>
            <p className={s.home}>TOP week</p>
            {data && <MovieList array={data} />}
        </>
    )
};

export default Home;