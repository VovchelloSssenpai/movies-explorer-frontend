import magnifyingGlass from "../../images/magnifying.svg";
import FilterCheckbox from "../Checkbox/FilterCheckbox";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({
  setSearchTerm,
  handleSearchSubmit,
  searchTerm,
  setIsShortFilm,
  isShortFilm,
}) {
  const location = useLocation();
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

  useEffect(() => {
    if (location.pathname === "/movies") {
      const savedSearchTerm = localStorage.getItem("searchTerm");
      if (savedSearchTerm) {
        setSearchTerm(savedSearchTerm);
      }
    }
  }, [setSearchTerm, location]);

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
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button
          className="movies__searchButton button-hover"
          onClick={handleSubmit}
        >
          Найти
        </button>
      </div>
      <span className="SearchForm-error">{movieError}</span>
      <FilterCheckbox
        setIsShortFilm={setIsShortFilm}
        isShortFilm={isShortFilm}
      ></FilterCheckbox>
    </form>
  );
}

export default SearchForm;
