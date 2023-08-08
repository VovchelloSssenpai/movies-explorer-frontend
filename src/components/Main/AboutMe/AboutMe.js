import imgpath from '../../../images/photo.png'
import Portfolio from '../Portfolio/Portfolio'

function AboutMe() {
    return (
      <section className="aboutMe" id='aboutMe'>
        <div className='aboutMe__wrapper'>
            <h2 className="sectionHeader">Студент</h2>
                <div className="aboutMe__flexwrapper">
                    <div className="aboutMe__details">
                        <h3 className='aboutMe__name'>Виталий</h3>
                        <p className='aboutMe__prof'>Фронтенд-разработчик, 30 лет</p>
                        <p className='aboutMe__bio'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <a href="https://github.com/VovchelloSssenpai" className='aboutMe__link anchor-hover'>Github</a>
                    </div>
                    <div className='aboutMe__photoContainer'>
                        <img src={imgpath} alt="Изображение владельца портфолио" className="aboutMe__photo" ></img>
                    </div>
                </div>
                <Portfolio/>
        </div>
        
      </section>
    );
  }
  
  export default AboutMe;