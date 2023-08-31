import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function FilterCheckbox({ setIsShortFilm, isShortFilm }) {
 const location = useLocation();

  const handleCheckboxChange = () => {
    setIsShortFilm(!isShortFilm);
  };

  useEffect(() => {
    if(location.pathname === "/movies")
    {
    const savedShortFIlmStatus = localStorage.getItem("shortFilmStatus");
    if (savedShortFIlmStatus) {
      const isShortFilm = savedShortFIlmStatus === "true";
      setIsShortFilm(isShortFilm);
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="checkbox">
      <label className="checkbox__switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          className="checkbox__input"
          checked={isShortFilm}
          onChange={handleCheckboxChange}
        />
        <div className="checkbox__slider"></div>
      </label>
      <p className="checkbox__text">Короткометражка</p>
    </div>
  );
}

export default FilterCheckbox;
