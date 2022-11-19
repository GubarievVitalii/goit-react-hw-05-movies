import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../Loader/loader';
import s from './MainWrapper.module.scss';

const MainWrapper = () => {
  return (
    <>
      <header>
        <nav className={s.mainWrapper}>
          <Link className={s.mainWrapper_item} to="/">
            Home
          </Link>
          <Link className={s.mainWrapper_item} to="/movies">
            Movies
          </Link>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainWrapper;
