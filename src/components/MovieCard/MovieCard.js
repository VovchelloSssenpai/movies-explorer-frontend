import deleteIcon from '../../images/Xicon.svg'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

function MovieCard({movieData, handleLike, handleDislike, likedMovies, gettingLikedMovies}) {
const location = useLocation();
const [isLikedMovie, setIsLikedMovie] = useState(false);

useEffect(() => {
  
  function handleIsLikedButton() {
    if (likedMovies.some(movie => movie.movieId === movieData.id)) {
      setIsLikedMovie(true);
    } else {
      setIsLikedMovie(false);
    }
  }
 if( location.pathname === '/movies') 
  handleIsLikedButton()
}, [likedMovies, location.pathname, movieData.id]);

function handleDuration(){
    if(movieData.duration > 60 ) {return `${Math.floor(movieData.duration / 60)}ч ${movieData.duration - 60 * Math.floor(movieData.duration / 60) } минуты`}
    else {return `${movieData.duration} минут`}
  }

const sanitizedNameRU = movieData.nameRU.replace(/[^А-Яа-яёЁ\s]/g, ' ');
const sanitizedNameEN = movieData.nameEN.replace(/[^A-Za-z\s]/g, ' ');

const handleLikeClick = () => {
  const { image, ...otherData } = movieData;
  handleLike({ ...otherData, thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`, image:`https://api.nomoreparties.co/${movieData.image.url}`, nameRU: sanitizedNameRU, nameEN: sanitizedNameEN});
  setIsLikedMovie(true);
};

const handleDislikeClick = () => {
 likedMovies.some(movie => movie.movieId === movieData.id ? handleDislike(movie._id) : '')
 setIsLikedMovie(false);
}


const handleDeleteCard = () => {
  handleDislike(movieData._id);
  // gettingLikedMovies();
 }


    return (
             <li className="movieCard">
                    <div className="movieCard__info">
                      <h2 className="movieCard__name">{movieData.nameRU}</h2>
                      <p className="movieCard__duration">{handleDuration()}</p>
                    </div>
                    <a href={movieData.trailerLink}><img alt={movieData.nameRU} src={location.pathname === '/movies' ? `https://api.nomoreparties.co/${movieData.image.url}` : `${movieData.image}` } className='movieCard__img'></img></a>
                    {location.pathname === '/movies' && !isLikedMovie && (<button className="movieCard__button" onClick={handleLikeClick}>Сохранить</button>)}
                    {location.pathname === '/movies' && isLikedMovie && (<button className="movieCard__button movieCard__button-active" onClick={handleDislikeClick}>&#10003;</button>)}
                    {location.pathname === '/saved-movies' && (<button className="movieCard__button" onClick={handleDeleteCard}><img src={deleteIcon} alt='кнопка удаления'></img></button>)}                      
             </li>
    );
  }
  
  export default MovieCard;