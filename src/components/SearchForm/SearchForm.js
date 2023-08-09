import magnifyingGlass from '../../images/magnifying.svg'
import FilterCheckbox from '../Checkbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm() {
  const [movieError, setMovieError] = useState('');

  const handleInvalid = (event) => {
    const input = event.target;
    const errorMessage = input.validationMessage;
    setMovieError(errorMessage);

  };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`hehe`);
}

    return (
        <form name='search' className='SearchForm' noValidate>
        <div className="SearchForm__inputWrapper">
          <img src={magnifyingGlass} alt='magnifying glass' className='SearchForm__searchImage'></img>
          <input placeholder={movieError ? movieError : "Фильм"} required className="SearchForm__input" name='movie' onInput={handleInvalid}></input>
          <button className='movies__searchButton button-hover' onClick={handleSubmit}>Найти</button>
        </div>
        <FilterCheckbox></FilterCheckbox>        
      </form>
    );
  }
  
  export default SearchForm;