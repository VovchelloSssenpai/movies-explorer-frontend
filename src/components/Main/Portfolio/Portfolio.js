// import linkImg from '../../../images/link.svg'

function Portfolio() {
    return (
      <section className="portfolio">
          <h3 className="portfolio__header">Портфолио</h3>
          <ul className="portfolio__list">
            <li className="portfolio__item">
                <a href="https://vovchellosssenpai.github.io/how-to-learn-built-from-scratch-/" target="_blank" rel="noreferrer" className="portfolio__link anchor-hover">Статичный сайт<span className="portfolio__arrow">↗</span></a>
                </li>
            <li className="portfolio__item">
                <a href="https://vovchellosssenpai.github.io/russian-travel/" target="_blank" rel="noreferrer" className="portfolio__link anchor-hover">Адаптивный сайт<span className="portfolio__arrow">↗</span></a>
                </li>
            <li className="portfolio__item">
                <a href="https://vovchellosssenpai.github.io/react-mesto-auth/" target="_blank" rel="noreferrer" className="portfolio__link anchor-hover">Одностраничное приложение<span className="portfolio__arrow">↗</span></a>
                </li>
          </ul>
      </section>
    );
  }
  
  export default Portfolio;