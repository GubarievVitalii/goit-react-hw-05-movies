import { useState } from "react";
import { fetchSearchMovie } from '../../utils/API'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MovieList from '../../components/MovieList/MovieList'
import s from "./movies.module.scss"

const SearchMovie = () => {
    const [data, setData] = useState()
    const [query, setQuery] = useState('')

    const onInputChange = event => setQuery(event.target.value);
    const reset = () => setQuery('');

    const onFormSubmit = event => {
        event.preventDefault();
        if (!query) {
            Notify.warning('Sorry, your query is empty, please, make your choice');
            return;
        }

        fetchSearchMovie(query).then(results => setData(results)).catch(error => console.log(error))
        reset();
    }
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