import magnifyingGlass from '../../images/magnifying.svg'
import FilterCheckbox from '../Checkbox/FilterCheckbox';

function SearchForm() {
    return (
        <form name='search' className='SearchForm' noValidate>
        <div className="SearchForm__inputWrapper">
          <img src={magnifyingGlass} alt='magnifying glass' className='SearchForm__searchImage'></img>
          <input placeholder="Фильм" className="SearchForm__input"></input>
          <button className='movies__searchButton button-hover'>Найти</button>
        </div>
        <FilterCheckbox></FilterCheckbox>        
      </form>
    );
  }
  
  export default SearchForm;