import React, { useState, useEffect } from 'react';


function MoviesCardList({children, isOwn}) {
  const [visibleCards, setVisibleCards] = useState(getInitialVisibleCards());
 
  function getInitialVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
      return 5;
    } else if (screenWidth <= 768) {
      return 8;
    } else {
      return 12;
    }
  }

  const handleShowMore = () => {
    const screenWidth = window.innerWidth;
    if(screenWidth > 768) {setVisibleCards(visibleCards + 3)}
    else {setVisibleCards(visibleCards + 2)}
  }

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getInitialVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
    return (
             <section className="moviesCardList">
                   <ul className={`moviesCardList__list ${isOwn ? 'own' : null}`}>
                     {React.Children.toArray(children).slice(0, visibleCards)}          
                  </ul>
                {children.length > 12 && !(children.length <= visibleCards) ? <button className='moviesCardList__button button-hover' onClick={handleShowMore}>Ещё</button> : ""}       
             </section>
    );
  }
  
  export default MoviesCardList;