import example from '../../images/example.png'
import deleteIcon from '../../images/Xicon.svg'

function MovieCard({isActive, isOwn}) {
    return (
             <li className="movieCard">
                    <div className="movieCard__info">
                      <h2 className="movieCard__name">В погоне за Бенкси</h2>
                      <p className="movieCard__duration">27 минут</p>
                    </div>
                    <img alt="В погоне за Бенкси" src={example} className='movieCard__img'></img>
                    {isOwn ? (
        <button className="movieCard__button"><img src={deleteIcon} alt='кнопка удаления'></img></button>
      ) : isActive ? (
        <button className="movieCard__button movieCard__button-active">&#10003;</button>
      ) : (
        <button className="movieCard__button">Сохранить</button>
      )} 
                    
             </li>
    );
  }
  
  export default MovieCard;