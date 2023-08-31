import React, { useState, useEffect } from "react";
import { HIGH_WIDTH_MOVIE_AMOUNT, MEDIUM_WIDTH_MOVIE_AMOUNT, SMALL_WIDTH_MOVIE_AMOUNT, HIGHER_WIDTH_MOVIE_ADD, SMALLER_WIDTH_MOVIE_ADD } from "../../utils/constandData";

function MoviesCardList({ children, isOwn }) {
  const [visibleCards, setVisibleCards] = useState(getInitialVisibleCards());

  function getInitialVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
      return SMALL_WIDTH_MOVIE_AMOUNT;
    } else if (screenWidth <= 768) {
      return MEDIUM_WIDTH_MOVIE_AMOUNT;
    } else {
      return HIGH_WIDTH_MOVIE_AMOUNT;
    }
  }

  const handleShowMore = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      setVisibleCards(visibleCards + HIGHER_WIDTH_MOVIE_ADD);
    } else {
      setVisibleCards(visibleCards + SMALLER_WIDTH_MOVIE_ADD);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getInitialVisibleCards());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="moviesCardList">
      <ul className={`moviesCardList__list ${isOwn ? "own" : null}`}>
        {React.Children.toArray(children).slice(0, visibleCards)}
      </ul>
      {children.length > 12 && !(children.length <= visibleCards) ? (
        <button
          className="moviesCardList__button button-hover"
          onClick={handleShowMore}
        >
          Ещё
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default MoviesCardList;
