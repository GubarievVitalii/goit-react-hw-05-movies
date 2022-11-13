import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b6e7af7e5555d3af8cc5edf010c70982';

export async function fetchTrendingMovies() {
  axios.defaults.params = {
    api_key: API_KEY,
    language: "en"    
  };
  const response = await axios.get(`trending/movie/week`);
  return response.data.results;
};

export async function fetchMovieDetails(id) {
    axios.defaults.params = {
    api_key: API_KEY,
    language: "en"    
  };
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}

export async function fetchMovieCredits(id) {
    axios.defaults.params = {
    api_key: API_KEY,
    language: "en"    
  };
  const response = await axios.get(`/credit/${id}`);
  return response.data;
}

export async function fetchMovieReviews(id) {
    axios.defaults.params = {
    api_key: API_KEY,
    language: "en"    
  };
  const response = await axios.get(`/review/${id}`);
  return response.data;
}

// /trending/get-trending      список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies       поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details   запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits   запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews   запрос обзоров для страницы кинофильма.