import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import FilterCheckbox from "../Checkbox/FilterCheckbox";

function SavedMovies({ likedMovies, handleDislike, gettingLikedMovies }) {
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [likedFilteredMovies, setLikedFilteredMovies] = useState([]);

  useEffect(()=>{
    handleFilter()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likedMovies, isShortFilm])

  
  function handleFilter() {
    const regex = new RegExp(searchTerm, "i");
    const filteredMovies = likedMovies.filter((movie) => regex.test(movie.nameRU));

    if(!isShortFilm){
      setLikedFilteredMovies(filteredMovies);
  } 
  
    if(isShortFilm) {
      const shortFilms = filteredMovies.filter((movie) => movie.duration < 40);
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
        <FilterCheckbox
        setIsShortFilm={setIsShortFilm}
        isShortFilm={isShortFilm}
      ></FilterCheckbox>
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
