import { Link, Outlet } from "react-router-dom";
import s from "./MainWrapper.module.scss"

const MainWrapper = () => {
    return (
        <>
        <header>
            <nav className={s.mainWrapper}>
                <Link className={s.mainWrapper_item} to="/">Home</Link>
                <Link className={s.mainWrapper_item}  to="/movies">Movies</Link>
            </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
)
};

export default MainWrapper;