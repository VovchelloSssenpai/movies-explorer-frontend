
function NavTab() {
    return (
        <nav className="navtab">
            <ul className="navtab__list">
                <li className="navtab__item">
                    <a href="#aboutProject" className="navtab__link anchor-hover">О проекте</a>
                </li>
                <li>
                    <a href="#techs" className="navtab__link anchor-hover">Технологии</a>
                </li>
                <li>
                    <a href="#aboutMe" className="navtab__link anchor-hover">Студент</a>
                </li>
            </ul>
        </nav>
    );
  }
  
  export default NavTab;