import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import headerLogo from '../../images/logo.svg'
import { useLocation } from 'react-router-dom';

function Header( { loggedIn } ) {
  const location = useLocation();
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const handleHamburgerClick = () => {
    setHamburgerActive(!hamburgerActive);
  };
  const handleBurger = () => {
    if(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile"){
      return <div className={`header__hamburger button-hover ${
                  hamburgerActive ? 'header__hamburger-active' : ''
                  }`} onClick={handleHamburgerClick}>
                <span className='header__bar'></span>
                <span className='header__bar'></span>
                <span className='header__bar'></span>
            </div>
    }
  }

    return (
     (location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/" || location.pathname === "/profile") ?  (<header className={`header`}>
      <a href='/' className='anchor-hover'><img src={headerLogo} alt="Лого" className="header__logo"/></a>
      <Navigation isActive={hamburgerActive} loggedIn={loggedIn} ></Navigation>
      {handleBurger()}
    </header>) : null 
    );
    }
  
  export default Header;