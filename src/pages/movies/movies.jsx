import { useState, useEffect } from 'react';
import { fetchSearchMovie } from '../../utils/API'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate, useSearchParams } from "react-router-dom";
import MovieList from '../../components/MovieList/MovieList'
import s from "./movies.module.scss"

const SearchMovie = () => {
    const [data, setData] = useState()
    const [query, setQuery] = useState('')
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const onInputChange = event => setQuery(event.target.value);
    const reset = () => setQuery('');

    const onFormSubmit = event => {
        event.preventDefault();
        if (!query) {
            Notify.warning('Sorry, your query is empty, please, make your choice');
            return;
        }
        setKeyword(query);
        
        navigate(`?query=${query}`)
        reset();
    }

    useEffect(() => {
        const key = searchParams.get('query')
        if (!key)
            return;
        

        fetchSearchMovie(key).then(results => {
            if (results.length === 0) {
                Notify.warning('Sorry, check the name is correct');
                return;
            }
            setData(results)
        }).catch(error => console.log(error))
    }, [keyword, searchParams]
    )

    return (
        <>
            <form className={s.searchMovie_form} onSubmit={onFormSubmit}>
                <input
                    name="query"
                    value={query}
                    onChange={onInputChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                />
                <button type="submit">Search</button>
            </form>
            {data && <MovieList array={data} />}
        </>
    );
};

export default SearchMovie;