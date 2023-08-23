import { useEffect } from 'react';

function FilterCheckbox({ setIsShortFilm, isShortFilm }) {
    const handleCheckboxChange = () => {
        setIsShortFilm(!isShortFilm);
      };
    


      useEffect(() => {
        const savedShortFIlmStatus = localStorage.getItem('shortFilmStatus');
        if (savedShortFIlmStatus) {
            const isShortFilm = savedShortFIlmStatus === 'true';
            setIsShortFilm(isShortFilm);
        }
      }, []);


    return (
        <div className='checkbox'>
                <label className='checkbox__switch' htmlFor="checkbox">
                <input type="checkbox" 
                       id="checkbox" 
                       className='checkbox__input'
                       checked = {isShortFilm}
                       onChange={handleCheckboxChange}
                       />
                <div className="checkbox__slider"></div>
                </label>
                <p className='checkbox__text'>Короткометражка</p>
        </div>
    );
  }
  
  export default FilterCheckbox;