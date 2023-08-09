import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MovieCard from '../MovieCard/MovieCard';

function Movies() {
    return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList>
        <MovieCard isActive={true} />
                        <MovieCard isActive={true} /> 
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/> 
                        <MovieCard isActive={true} />
                        <MovieCard isActive={true} />
                        <MovieCard/> 
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard isActive={true} />
                        <MovieCard/>
        </MoviesCardList>
    </main>
    );
  }
  
  export default Movies;