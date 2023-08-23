import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';

function Movies( {  
                   isLoading, 
                   isResponseOk, 
                   handleLike,
                   handleDislike,
                   likedMovies,
                   allMovies,
                   handleMoviesDataRequest
                  } ) {

const [filteredMovies, setFilteredMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [isShortFilm, setIsShortFilm] = useState(false);

// Функция поиска фильмов по фильтру regex
function handleFilter(movies) { return movies.filter((movie) => {

  const regex = new RegExp(searchTerm, 'i');
  localStorage.setItem('searchTerm', searchTerm);

  return regex.test(movie.nameRU);
    })}



// Функция фильтрации короткометражек
function handleShortFilmFiltr(filteredMovies){

  if (isShortFilm) {
    const shortFilms = filteredMovies.filter(movie => movie.duration < 40);
    setFilteredMovies(shortFilms);
    localStorage.setItem('savedMovies', JSON.stringify(shortFilms));
  } 
    else {
      setFilteredMovies(filteredMovies);
    localStorage.setItem('savedMovies', JSON.stringify(filteredMovies));
  }
}


function handleSearchSubmit() {
  handleMoviesDataRequest();
  const filterMovies = handleFilter(allMovies);
  handleShortFilmFiltr(filterMovies);
  localStorage.setItem('shortFilmStatus', isShortFilm)
}


    useEffect(() => {
                      const savedMoviesString = localStorage.getItem('savedMovies' || []);
                      const savedIsShortFilmString = localStorage.getItem('shortFilmStatus' || []);
                      
                      if (savedMoviesString) {
                        setFilteredMovies(JSON.parse(savedMoviesString));
                      }
                    
                      if (savedIsShortFilmString) {
                        setIsShortFilm(JSON.parse(savedIsShortFilmString));
                      }
                    }, [setIsShortFilm, setFilteredMovies]);


    return (
    <main className="movies">
      <SearchForm setSearchTerm = { setSearchTerm } 
                  searchTerm={ searchTerm } 
                  handleSearchSubmit = { handleSearchSubmit } 
                  setIsShortFilm = {setIsShortFilm}
                  isShortFilm = {isShortFilm}
                  ></SearchForm>

    { isLoading ? (<Preloader/>) : 
    !isResponseOk ? (<p>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>) : 
    filteredMovies.length > 0 ? (<MoviesCardList>
                        {filteredMovies.map((data, i ) => {
                          return <MovieCard movieData={data} key={data.id} handleLike={handleLike} handleDislike={handleDislike} likedMovies={likedMovies} />
                        })}
        </MoviesCardList>) : <p>Ничего не найдено</p>  }  
    </main>
    );
  }
  
  export default Movies;