import { useLocation } from "react-router-dom";
import { practiCum, gitCum } from "../../utils/constandData";

function Footer() {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  return location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/" ? (
    <footer className="footer">
      <div className="footer__marginwrapper">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__wrapper">
          <p className="footer__year">© {currentYear}</p>
          <nav className="footer__nav">
            <ul className="footer__list">
              <li>
                <a
                  href={practiCum}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link anchor-hover"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li>
                <a
                  href={gitCum}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link anchor-hover"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  ) : null;
}

export default Footer;
