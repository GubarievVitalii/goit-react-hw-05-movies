import { Link } from "react-router-dom";
import s from "./MovieList.module.scss"

const MovieList = ({array}) => {
    return (
        <>
            <ol className={s.movieList}>                
            {array.map(({ id, title }) => (<li className={s.movieList_item} key ={id}>
            <Link className={s.movieList_link} to={`/movies/${id}`}>{ title }</Link>
            </li>))}
            </ol>
        </>
    )

}

export default MovieList;