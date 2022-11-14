import { Link, Outlet } from "react-router-dom";

const MainWrapper = () => {
    return (
        <>
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
)
};

export default MainWrapper;