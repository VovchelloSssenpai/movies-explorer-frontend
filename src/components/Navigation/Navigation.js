import { useLocation, Link } from "react-router-dom";

function Navigation({ isActive, loggedIn }) {
  const location = useLocation();

  function handleNavigation() {
    if (location.pathname === "/signin") {
      return;
    } else if (location.pathname === "/signup") {
      return;
    } else if (location.pathname === "/") {
      return !loggedIn ? (
        <nav className={`navigation-landing`}>
          <div className="navigation-landing__wrapper">
            <Link
              to="/signup"
              className="navigation-landing__button anchor-hover"
            >
              Регистрация
            </Link>
            <Link
              to="/signin"
              className="navigation-landing__button-colored anchor-hover"
            >
              Войти
            </Link>
          </div>
        </nav>
      ) : (
        <nav className={`navigation ${isActive ? `navigation_active` : ``}`}>
          <div className="navigation__wrapper">
            <div className="navigation__movieWrapper">
              <Link
                to="/"
                className={`navigation__movieLink anchor-hover navigation__movieLink-disabled ${
                  location.pathname === "/"
                    ? "navigation__movieLink-active"
                    : null
                }`}
              >
                Главная
              </Link>
              <Link
                to="/movies"
                className={`navigation__movieLink anchor-hover ${
                  location.pathname === "/movies"
                    ? "navigation__movieLink-active"
                    : null
                }`}
              >
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className={`navigation__movieLink anchor-hover  ${
                  location.pathname === "/saved-movies"
                    ? "navigation__movieLink-active"
                    : null
                }`}
              >
                Сохранённые фильмы
              </Link>
            </div>
            <Link to="/profile" className="navigation__accountLink anchor-hover">
              Аккаунт
            </Link>
          </div>
        </nav>
      );
    } else if (
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile"
    ) {
      return (
        <nav className={`navigation ${isActive ? `navigation_active` : ``}`}>
          <div className="navigation__wrapper">
            <div className="navigation__movieWrapper">
              <Link
                to="/"
                className={`navigation__movieLink anchor-hover navigation__movieLink-disabled ${
                  location.pathname === "/"
                    ? "navigation__movieLink-active"
                    : null
                }`}
              >
                Главная
              </Link>
              <Link
                to="/movies"
                className={`navigation__movieLink anchor-hover ${
                  location.pathname === "/movies"
                    ? "navigation__movieLink-active"
                    : null
                }`}
              >
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className={`navigation__movieLink anchor-hover  ${
                  location.pathname === "/saved-movies"
                    ? "navigation__movieLink-active"
                    : null
                }`}
              >
                Сохранённые фильмы
              </Link>
            </div>
            <Link to="/profile" className="navigation__accountLink anchor-hover">
              Аккаунт
            </Link>
          </div>
        </nav>
      );
    }
  }
  return <>{handleNavigation()}</>;
}

export default Navigation;
