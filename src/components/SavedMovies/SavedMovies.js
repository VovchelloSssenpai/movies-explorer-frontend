import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MovieCard from '../MovieCard/MovieCard';

function SavedMovies() {
    return (
    <main className="savedMovies">
      <SearchForm></SearchForm>
      <MoviesCardList isOwn={true}>
        <MovieCard isOwn={true} />
        <MovieCard isOwn={true} />
        <MovieCard isOwn={true} /> 
      </MoviesCardList>
    </main>
    );
  }
  
  export default SavedMovies;