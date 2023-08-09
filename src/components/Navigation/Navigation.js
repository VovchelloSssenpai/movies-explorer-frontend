import { useLocation } from 'react-router-dom';


function Navigation({ isActive }) {
  const location = useLocation();
  
  function handleNavigation(){
    if (location.pathname === "/signin") {return }
    else if(location.pathname === "/signup"){return }
    else if(location.pathname === "/"){return (<nav className={`navigation-landing`}><div className='navigation-landing__wrapper'>
                                                  <a href='/signup' className='navigation-landing__button anchor-hover' >Регистрация</a>
                                                  <a href='/signin' className='navigation-landing__button-colored anchor-hover' >Войти</a>
                                              </div></nav>)}
    else if(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") {
      return  (<nav className={`navigation ${isActive ? `navigation_active` : ``}`}><div className='navigation__wrapper'>
        <div className='navigation__movieWrapper'>
            <a href='/' className={`navigation__movieLink anchor-hover navigation__movieLink-disabled ${location.pathname === "/" ? "navigation__movieLink-active" : null}`}>Главная</a>
            <a href='/movies' className={`navigation__movieLink anchor-hover ${location.pathname === "/movies" ? "navigation__movieLink-active" : null}`}>Фильмы</a>
            <a href='/saved-movies' className={`navigation__movieLink anchor-hover  ${location.pathname === "/saved-movies" ? "navigation__movieLink-active" : null}`}>Сохранённые фильмы</a>
        </div>
        <a href='/profile' className='navigation__accountLink anchor-hover'>Аккаунт</a>
  </div></nav>)
    }                                          
  } 
    return (
      <>{handleNavigation()}</>
    );
    }
  
  export default Navigation;