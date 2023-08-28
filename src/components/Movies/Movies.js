import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MovieCard from "../MovieCard/MovieCard";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";

function Movies({
  isLoading,
  isResponseOk,
  handleLike,
  handleDislike,
  likedMovies,
  allMovies,
  handleMoviesDataRequest,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isShortFilm, setIsShortFilm] = useState(true);
  // useEffect(()=>{
  //   setIsShortFilm(JSON.parse(localStorage.getItem("shortFilmStatus" || [])))
  // }, [])

  function handleInitialFiltr() {
    const regex = new RegExp(searchTerm, "i");
    const filtered = allMovies.filter((movie) => regex.test(movie.nameRU));
    // Set filteredMovies state
    setFilteredMovies(filtered);
    // Save searchTerm and filteredMovies to local storage
    localStorage.setItem("searchTerm", searchTerm);
    localStorage.setItem("savedMovies", JSON.stringify(filtered));
  }


  useEffect(() => {
    const savedMoviesString = localStorage.getItem("savedMovies");
    const savedShortMovies = localStorage.getItem("ShortMovies");
    const shortFilmStatus = JSON.parse(localStorage.getItem("shortFilmStatus"));
    setIsShortFilm(shortFilmStatus);

    if (savedMoviesString && !shortFilmStatus) {
      setFilteredMovies(JSON.parse(savedMoviesString));
    } 
    if(savedShortMovies && shortFilmStatus) {
      setFilteredMovies(JSON.parse(savedShortMovies))
    }


  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function handleShortFiltr() {
    console.log(isShortFilm);
   if(isShortFilm) {
    const shortFilms = filteredMovies.filter((movie) => movie.duration < 40);
    setFilteredMovies(shortFilms)
    localStorage.setItem("ShortMovies", JSON.stringify(shortFilms))
    localStorage.setItem("shortFilmStatus", JSON.stringify(isShortFilm))
  }
  if(!isShortFilm) {setFilteredMovies(JSON.parse(localStorage.getItem("savedMovies")))
    localStorage.setItem("shortFilmStatus", JSON.stringify(isShortFilm))}
  }

  useEffect(()=>{
    handleShortFiltr();

  }, [isShortFilm])
  
  
  function handleSearchSubmit() {
    handleMoviesDataRequest();
    handleInitialFiltr()
  }


//   function handleFiltr() {
//     if(isShortFilm) {
//       
//       setFilteredMovies(shortFilms);
//       // localStorage.setItem("savedMovies", JSON.stringify(shortFilms));
//       // localStorage.setItem("shortFilmStatus", JSON.stringify(isShortFilm)); 
//     }
//       else {
//         setFilteredMovies(allMovies.filter((movie) => {
//           const regex = new RegExp(searchTerm, "i");
//           localStorage.setItem("searchTerm", searchTerm);
//         return  regex.test(movie.nameRU);
//         }));
//         localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
//         localStorage.setItem("shortFilmStatus", JSON.stringify(isShortFilm));
//       }
//   }

//   useEffect(()=>{
//     handleFiltr()
//   }, [isShortFilm, allMovies])
  
//   useEffect(() => {
//     const savedIsShortFilm = JSON.parse(localStorage.getItem("shortFilmStatus"));
//     if (savedIsShortFilm !== null) {
//       setIsShortFilm(savedIsShortFilm);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("shortFilmStatus", JSON.stringify(isShortFilm));
//   }, [isShortFilm]);

  // useEffect(() => {
  //   const savedMoviesString = localStorage.getItem("savedMovies" || []);
  //   const savedIsShortFilmString = localStorage.getItem(
  //     "shortFilmStatus" || []
  //   );

  //   if (savedMoviesString) {
  //     setFilteredMovies(JSON.parse(savedMoviesString));
  //   }

  //   if (savedIsShortFilmString) {
  //     setIsShortFilm(JSON.parse(savedIsShortFilmString));
  //   }
  // }, []);

  return (
    <main className="movies">
      <SearchForm
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        handleSearchSubmit={handleSearchSubmit}
        setIsShortFilm={setIsShortFilm}
        isShortFilm={isShortFilm}
      ></SearchForm>

      {isLoading ? (
        <Preloader />
      ) : !isResponseOk ? (
        <p>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : filteredMovies.length > 0 ? (
        <MoviesCardList>
          {filteredMovies.map((data, i) => {
            return (
              <MovieCard
                movieData={data}
                key={data.id}
                handleLike={handleLike}
                handleDislike={handleDislike}
                likedMovies={likedMovies}
              />
            );
          })}
        </MoviesCardList>
      ) : (
        <p>Ничего не найдено</p>
      )}
    </main>
  );
}

export default Movies;






  // // Функция поиска фильмов по фильтру regex
  // function handleFilter(movies) {
  //   return movies.filter((movie) => {
  //     const regex = new RegExp(searchTerm, "i");
  //     localStorage.setItem("searchTerm", searchTerm);

  //     return regex.test(movie.nameRU);
  //   });
  // }

  // // Функция фильтрации короткометражек
  // function handleShortFilmFiltr(filteredMovies) {
  //   if (isShortFilm) {
  //     const shortFilms = filteredMovies.filter((movie) => movie.duration < 40);
  //     setFilteredMovies(shortFilms);
  //     localStorage.setItem("savedMovies", JSON.stringify(shortFilms));
  //   } else {
  //     setFilteredMovies(filteredMovies);
  //     localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
  //   }
  // }

  // function handleSearchSubmit() {
  //   handleMoviesDataRequest();
  //   const filterMovies = handleFilter(allMovies);
  //   handleShortFilmFiltr(filterMovies);
  //   localStorage.setItem("shortFilmStatus", isShortFilm);
  // }

  // useEffect(() => {
  //   const savedMoviesString = localStorage.getItem("savedMovies" || []);
  //   const savedIsShortFilmString = localStorage.getItem(
  //     "shortFilmStatus" || []
  //   );

  //   if (savedMoviesString) {
  //     setFilteredMovies(JSON.parse(savedMoviesString));
  //   }

  //   if (savedIsShortFilmString) {
  //     setIsShortFilm(JSON.parse(savedIsShortFilmString));
  //   }
  // }, [setIsShortFilm, setFilteredMovies]);