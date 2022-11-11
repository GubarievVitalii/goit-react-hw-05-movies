import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <div>Home</div> }></Route>
      </Routes>

    </>
  );
};


/Home                       /trending/get-trending 

/movies                     /search/search-movies

/movies/:movieId            /movies/get-movie-details  
  /movies/:movieId/cast       /movies/get-movie-credits  
  /movies/:movieId/review     /movies/get-movie-reviews 