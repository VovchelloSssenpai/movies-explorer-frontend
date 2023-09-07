import magnifyingGlass from "../../images/magnifying.svg";
import { useState } from "react";

function SearchForm({
  setSearchTerm,
  handleSearchSubmit,
  searchTerm,
  setIsShortFilm,
  isShortFilm,
  search
}) {
  const [movieError, setMovieError] = useState("");

  const handleInvalid = (event) => {
    const input = event.target;
    const errorMessage = input.validationMessage;
    setMovieError(errorMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !searchTerm.length > 0
      ? setMovieError("Enter a key word")
      : handleSearchSubmit();
  };


  return (
    <form name="search" className="SearchForm" action="submit" noValidate>
      <div className="SearchForm__inputWrapper">
        <img
          src={magnifyingGlass}
          alt="magnifying glass"
          className="SearchForm__searchImage"
        ></img>
        <input
          placeholder="Фильм"
          required
          className="SearchForm__input"
          name="movie"
          value={searchTerm}
          onInput={handleInvalid}
          onChange={search}
        ></input>
        <button
          className="movies__searchButton button-hover"
          onClick={handleSubmit}
        >
          Найти
        </button>
      </div>
      <span className="SearchForm-error">{movieError}</span>
    </form>
  );
}

export default SearchForm;
