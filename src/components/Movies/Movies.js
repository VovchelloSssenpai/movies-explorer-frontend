import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MovieCard from "../MovieCard/MovieCard";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";

function Movies({
  isLoading,
  isResponseOk,
  handleLike,
  handleDislike,
  likedMovies,
  allMovies,
  handleMoviesDataRequest,
}) {

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState(JSON.parse(localStorage.getItem('shortMovies')) || []);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm") || "");
  const [isShortFilm, setIsShortFilm] = useState(JSON.parse(localStorage.getItem("shortFilmStatus") || false));
   
  function handleInitialFilter() {
    const regex = new RegExp(searchTerm, "i");
    const filteredMovies = allMovies.filter((movie) => regex.test(movie.nameRU));
    if(searchTerm.length > 0) {setFilteredMovies(filteredMovies);}
    return filteredMovies;
  }

useEffect(()=>{
  handleFilter()
}, [])

  function handleFilter (){
    if(!isShortFilm) {
      handleInitialFilter()
      localStorage.setItem("shortFilmStatus", JSON.stringify(isShortFilm))
  } 
    if(isShortFilm) {
      handleShortFilm()
      localStorage.setItem("shortFilmStatus", JSON.stringify(isShortFilm))
    }
  } 
  

  useEffect(()=>{
    handleFilter()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [isShortFilm])


function handleShortFilm(){
 const filteredMovies = handleInitialFilter();
  const shortFilms = filteredMovies.filter((movie) => movie.duration < 40);
  setFilteredMovies(shortFilms)
}


  function handleSearchSubmit  () {
    handleFilter();
  };


  // Функция посковика 
  function search (e){
    const value = e.target.value;
    setSearchTerm(value);
    localStorage.setItem("searchTerm", value)
  };

  return (
    <main className="movies">
      <SearchForm
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        handleSearchSubmit={handleSearchSubmit}
        setIsShortFilm={setIsShortFilm}
        isShortFilm={isShortFilm}
        search={search}
      ></SearchForm>

      {isLoading ? (
        <Preloader />
      ) : !isResponseOk ? (
        <p>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : filteredMovies.length > 0 ? (
        <MoviesCardList>
          { filteredMovies.map((data, i) => {
            return (
              <MovieCard
                movieData={data}
                key={data.id}
                handleLike={handleLike}
                handleDislike={handleDislike}
                likedMovies={likedMovies}
              />
            );
          })}
        </MoviesCardList>
      ) : (
        <p>Ничего не найдено</p>
      )}
    </main>
  );
}

export default Movies;
