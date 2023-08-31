import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";

function SavedMovies({ likedMovies, handleDislike, gettingLikedMovies }) {
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [likedFilteredMovies, setLikedFilteredMovies] = useState([]);

  useEffect(()=>{
    handleFilter()
  }, [likedMovies, isShortFilm])

  // // Функция поиска фильмов по фильтру regex
  function handleWordFilter(){
    const regex = new RegExp(searchTerm, "i");
    const filteredMovies = likedMovies.filter((movie) => regex.test(movie.nameRU));
    setLikedFilteredMovies(filteredMovies);
  }

  function handleFilter() {
    console.log(isShortFilm);
    if(!isShortFilm){
      handleWordFilter()
  } if(isShortFilm) {
      const shortFilms = likedFilteredMovies.filter((movie) => movie.duration < 40);
       setLikedFilteredMovies(shortFilms);
  }
  }

  function handleSearchSubmit() {
    handleFilter();
  }

  function search (e){
    const value = e.target.value;
    setSearchTerm(value);
  };


  return (
    <main className="savedMovies">
      <SearchForm
        setIsShortFilm={setIsShortFilm}
        isShortFilm={isShortFilm}
        setSearchTerm={setSearchTerm}
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        search={search}
      ></SearchForm>
      <MoviesCardList>
        {likedFilteredMovies.length > 0 ? (
          likedFilteredMovies.map((data, i) => {
            return (
              <MovieCard
                movieData={data}
                key={data.movieId}
                handleDislike={handleDislike}
                gettingLikedMovies={gettingLikedMovies}
              />
            );
          })
        ) : (
          <p>Ничего не найдено</p>
        )}
      </MoviesCardList>
    </main>
  );
}

export default SavedMovies;
