function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="footer__marginwrapper">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
         <div className="footer__wrapper">
            <p className="footer__year">© {currentYear}</p>
            <nav className="footer__nav">
                <ul className="footer__list">
                    <li><a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link anchor-hover">Яндекс.Практикум</a></li>
                    <li><a href="https://github.com/VovchelloSssenpai?tab=repositories" target="_blank" rel="noreferrer" className="footer__link anchor-hover">Github</a></li>
                </ul>
            </nav>
         </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;