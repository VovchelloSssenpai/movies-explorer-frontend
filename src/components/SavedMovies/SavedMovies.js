import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MovieCard from '../MovieCard/MovieCard';
import { useEffect, useState } from 'react';

function SavedMovies( { likedMovies, handleDislike, gettingLikedMovies }) {
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [likedFilteredMovies, setLikedFilteredMovies] = useState([]);


// Функция поиска фильмов по фильтру regex

function handleFilter(movies) { return movies.filter((movie) => {

  const regex = new RegExp(searchTerm, 'i');
  return regex.test(movie.nameRU);
    })}


function handleShortFilmFiltr(filteredMovies){
      if (isShortFilm) {
        const shortFilms = filteredMovies.filter(movie => movie.duration < 40);
        setLikedFilteredMovies(shortFilms);
      } 
        else {
        setLikedFilteredMovies(filteredMovies);
       
      }
    }

function handleSearchSubmit() {
      const filterMovies = handleFilter(likedMovies);
      handleShortFilmFiltr(filterMovies);
    }

    useEffect(()=>{
      setLikedFilteredMovies(likedMovies);
    }, [likedMovies])

    return (
    <main className="savedMovies">
      <SearchForm setIsShortFilm = {setIsShortFilm} isShortFilm={isShortFilm} setSearchTerm={setSearchTerm} handleSearchSubmit={handleSearchSubmit} searchTerm={searchTerm} ></SearchForm>
      <MoviesCardList>
                       {likedFilteredMovies.length > 0 ?   (likedFilteredMovies.map((data, i ) => {
                          return <MovieCard movieData={data} key={data.movieId} handleDislike={handleDislike} gettingLikedMovies={gettingLikedMovies}  />
                        })) : <p>Ничего не найдено</p>}
        </MoviesCardList>
    </main>
    );
  }
  
  export default SavedMovies;