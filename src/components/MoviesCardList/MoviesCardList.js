function MoviesCardList({children, isOwn}) {
    return (
             <section className="moviesCardList">
                   <ul className={`moviesCardList__list ${isOwn ? 'own' : null}`}>
                     {children}          
                  </ul>
                {children.length > 3 ? <button className='moviesCardList__button button-hover'>Ещё</button> : ""}       
             </section>
    );
  }
  
  export default MoviesCardList;