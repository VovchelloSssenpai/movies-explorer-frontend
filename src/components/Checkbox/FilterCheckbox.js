function FilterCheckbox() {
    return (
        <div className='checkbox'>
                <label className='checkbox__switch' htmlFor="checkbox">
                <input type="checkbox" id="checkbox" className='checkbox__input' />
                <div className="checkbox__slider"></div>
                </label>
                <p className='checkbox__text'>Короткометражка</p>
        </div>
    );
  }
  
  export default FilterCheckbox;